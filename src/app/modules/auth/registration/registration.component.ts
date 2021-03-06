import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserService} from '../../../services/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  forbiddenEmail = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   debugger;
    //   this.router.navigate(['/users/me']);
    // }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    return this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        user => {
          // this.alertService.success('Registration successful', true);
          this.router.navigate(['/login'], {
            queryParams: {
              nowCanLogin: true
            }
          });
        },
        error => {
          console.log(444, error);
          if (error === 'Conflict') {
            this.forbiddenEmail = true;
          }
        });
  }

}
