import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {ConfirmationDialogService} from '../shared/services/confirmation-dialog.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  searchUsers: string;

  constructor( private authenticationService: AuthenticationService,
               public translate: TranslateService,
               private confirmationDialogService: ConfirmationDialogService,
               private router: Router,
               private userService: UserService,
) {}

  public deleteUser() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete user ?')
      .then((confirmed) => {
        if (confirmed) {
          this.userService.deleteUser()
            .subscribe(result => {
            if (result) {
              this.router.navigate(['/login']);
            }
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  public logOut() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to log out ?')
      .then((confirmed) => {
        if (confirmed) {
           this.authenticationService.logout();
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  searchUsersByWord() {
    this.userService.searchUserByWord(this.searchUsers)
      .subscribe();
  }
}
