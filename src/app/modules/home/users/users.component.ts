import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {IUserInfo} from '../../shared/models/IUserInfo';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: IUserInfo[];

  public totalUsersAmount = 0;
  private currentPage = 1;
  private limitUsers = 10;

  usersLoaded = false;

  sub1: Subscription;
  sub2: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.sub1 = this.userService.$users.subscribe(result => {
      if (result) {
        this.users = result.users;
        this.totalUsersAmount = result.total;
      }

    });

    this.sub2 = this.userService.getAllUsers(this.currentPage)
      .subscribe(users => {
        this.users = users.users;
        this.totalUsersAmount = users.total;
        this.usersLoaded = true;
      });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

  public goToPage(page): void {
    this.currentPage = page;
    this._loadUsers(
      this.currentPage,
      this.limitUsers
    );
  }

  private _loadUsers(page = 1, limit = 10) {
    this.userService.getAllUsers(
      page, limit
    ).subscribe((response) => {
      this.users = response.users;
      this.totalUsersAmount = response.total;
    }, (error) => console.error(error));
  }


}
