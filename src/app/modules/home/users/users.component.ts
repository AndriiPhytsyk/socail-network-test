import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';
import {UserInfo} from '../../shared/models/userInfo';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: UserInfo[];

  public totalUsersAmount: number = 0;
  private _currentPage: number = 1;
  private _currentSearchValue: string = '';
  private _limitUsers: number = 10;

  private usersLoaded: boolean = false;

  sub1: Subscription;
  sub2: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.sub1 = this.userService.$users.subscribe(users => {
      this.users = users.users;
      this.totalUsersAmount = users.total;
    });

    this.sub2 = this.userService.getAllUsers(this._currentPage)
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

  public goToPage(page: number): void {
    this._currentPage = page;
    this._loadUsers(
      this._currentPage,
      this._limitUsers
    );
  }

  private _loadUsers(page: number = 1, limit: number = 10) {
    this.userService.getAllUsers(
      page, limit
    ).subscribe((response) => {
      this.users = response.users;
      this.totalUsersAmount = response.total;
    }, (error) => console.error(error));
  }


}
