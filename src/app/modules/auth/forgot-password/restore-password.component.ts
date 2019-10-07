import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {NgForm} from '@angular/forms';
import {AlertService} from '../../shared/services/alert.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {

  constructor(private authService: AuthenticationService, private alertService: AlertService) { }

  passwordResetEmail: string;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    if(form.invalid) {
      return;
    }

    const {passwordResetEmail} = form.value;
    this.authService.forgotPassword(passwordResetEmail).subscribe(result => {
      if (result['success']) {
        this.alertService.success('Check your email');
      }
    })
  }

}
