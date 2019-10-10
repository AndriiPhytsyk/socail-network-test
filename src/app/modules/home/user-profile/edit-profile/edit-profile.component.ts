import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {UserInfo} from '../../../shared/models/userInfo';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.component.html'
})

export class EditProfileComponent implements OnInit {

  submitted = false;
  userInfo = {};
  private id: string;

  userInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit() {

    this.userService.getUsersMe().subscribe(userInfo => this.userInfo = userInfo);
    this.userInfoForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    let {name, lastname, city, country, age, description} = this.userInfoForm.value;
    age = +age;
    console.log(987, typeof age)
    const userInfo = new UserInfo(name, lastname, city, country, age, description);

    this.userService.editUserInfo(userInfo)
      .subscribe(result => {
        if (result.success) {
          this.userInfo = userInfo;
          this.router.navigate(['/users/me'], {
            queryParams: {
              informationEdited: true
            }
          });
        }
        this.submitted = true;
      });
  }
}
