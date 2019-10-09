import {Component, NgZone, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {first} from 'rxjs/operators';
import {InfoMessage} from '../../shared/models/info-message';
import {AuthService, SocialUser} from 'angularx-social-login';
import {FacebookLoginProvider, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  private user: SocialUser;
  private loggedIn: boolean;

  message: InfoMessage;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private translate: TranslateService,
    private ngZone: NgZone,
    private socialAuthService: AuthService
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.isLoggedIn()) {
    //   this.router.navigate(['/users/me']);
    // }

  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.message = new InfoMessage('danger', '')
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage('Введіть Ваш логін і пароль', 'success');
        } else if ((params['passwordChanged'])) {
          this.showMessage('Пароль було успішно змінено', 'success');
        }
      });
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new InfoMessage(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login({login: this.f.username.value, password: this.f.password.value})
      .pipe(first())
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          this.router.navigate(['/users/me']);
        },
        error => {
          this.showMessage('Не правильний логін або пароль', 'danger');
          this.loading = false;
        });
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(res => {
        this.authenticationService.signInWithGoogle(res.authToken, res.id);
      })
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(res => {
        debugger
        this.authenticationService.signInWithFacebook(res.authToken, res.id)
          .subscribe(response => {
            // this.router.navigate(['/users/me']);
          });
      });
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

  // signInWithFacebook() {
  //   console.log('submit login to facebook');
  //   // FB.login();
  //   FB.login((response) => {
  //     console.log('submitLogin', response);
  //     if (response.authResponse) {
  //       //login success
  //       //login success code here
  //       //redirect to home page
  //       const {authResponse} = response;
  //       this.authenticationService.signInWithFacebook(authResponse.accessToken, authResponse.userID)
  //         .subscribe(res => {
  //           this.ngZone.run(() => this.router.navigate(['/users/me'])).then();
  //           // this.router.navigate(['/users/me']);
  //         });
  //     }
  //     else {
  //       console.log('User login failed');
  //     }
  //   });
  // }
}




