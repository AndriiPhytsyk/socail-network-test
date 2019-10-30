import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {ConfirmationDialogService} from '../shared/services/confirmation-dialog.service';
import {UserService} from '../../services/user.service';
import {ConfirmDialogService} from '../shared/services/confirm-dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  searchUsers: string;

  constructor(private authenticationService: AuthenticationService,
              public translate: TranslateService,
              private confirmationDialogService: ConfirmationDialogService,
              private router: Router,
              private userService: UserService,
              public confirmDialogService: ConfirmDialogService
  ) {
  }


  // public logOut() {
  //   this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to log out ?')
  //     .then((confirmed) => {
  //       if (confirmed) {
  //          this.authenticationService.logout();
  //       }
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }

  public logOut() {
    this.confirmDialogService.confirm('Підтвердження', 'Ви дійсно хочете вийти?', 'Так', 'Ні')
      .subscribe(confirmed => {
        if (confirmed) {
          console.log(confirmed);
          console.log(typeof confirmed);
          this.authenticationService.logout();
        }
      });
  }

  public deleteUser() {
    this.confirmDialogService.confirm('Підтвердження', 'Ви дійсно хочете видалити цього користувача?', 'Так', 'Ні')
      .subscribe(confirmed => {
        if (confirmed) {
          this.userService.deleteUser()
            .subscribe(result => {
              if (result) {
                this.router.navigate(['/login']);
              }
            });
        }
      });
  }

  searchUsersByWord() {
    debugger
    this.userService.searchUserByWord(this.searchUsers)
      .subscribe();
  }
}
