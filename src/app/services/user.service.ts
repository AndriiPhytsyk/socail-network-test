import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {GLOBAL} from './global';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {UserInfo} from '../modules/shared/models/userInfo';

interface Users {
  users: UserInfo[];
  total: number;
}

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
    // console.log(this.$users.subscribe(res => console.log(333, res)))
  }

  users: { users: [], total: null };

  $users = new BehaviorSubject<Users | undefined>(this.users)

  getAllUsers(page: number, limit: number = 10): Observable<any> {
    return this.http.get<any>(`http://${GLOBAL.url}/users?page=${page}&limit=${limit}`);
  }

  deleteUser(): Observable<string> {
    return this.http.delete<any>(`http://${GLOBAL.url}/users/me`)
      .pipe(map(res => {
        return res.success;
      }));
  }

  getUserById(id): Observable<UserInfo> {
    return this.http.get<any>(`http://${GLOBAL.url}/users/${id}`);
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`http://${GLOBAL.url}/auth/signup`, user);
  }

  editUserInfo(userInfo) {
    return this.http.put<any>(`http://${GLOBAL.url}/users/me`, userInfo);
  }

  uploadPhoto(image) {
    return this.http.put<any>(`http://${GLOBAL.url}/users/updatePhoto`, image);
  }

  getUsersMe(): Observable<UserInfo> {
    return this.http.get<any>(`http://${GLOBAL.url}/users/me`)
      .pipe(map(result => {
          return result.user;
        }),
        tap(userInfo => {
          return userInfo;
        })
      );
  }

  searchUserByWord(searchWord = '', page = 1, limit = 10) {
    return this.http.get<any>(`http://${GLOBAL.url}/search?search=${searchWord}&limit=${limit}&page=${page}`)
      .pipe(map(result => {
        console.log(999, result);
        this.$users.next({
          users: result.users,
          total: result.total
        });
      }));
  }

}
