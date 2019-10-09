import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {GLOBAL} from './global';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  $users = new BehaviorSubject({});

  getAllUsers(page: number, limit: number = 10  ) {
    return this.http.get(`http://${GLOBAL.url}/users?page=${page}&limit=${limit}`);
  }

  deleteUser() {
    return this.http.delete(`http://${GLOBAL.url}/users/me`);
  }

  getUserById(id) {
    return this.http.get(`http://${GLOBAL.url}/users/${id}`);
  }

  register(user: any): Observable<any> {
    return this.http.post(`http://${GLOBAL.url}/auth/signup`, user);
  }

  editUserInfo(userInfo) {
    return this.http.put(`http://${GLOBAL.url}/users/me`, userInfo);
  }

  uploadPhoto(image) {
    return this.http.put(`http://${GLOBAL.url}/users/updatePhoto`, image);
  }

  getUsersMe() {
    return this.http.get(`http://${GLOBAL.url}/users/me`);
  }

  searchUserByWord(searchWord = '', page = 1, limit = 10) {
    return this.http.get(`http://${GLOBAL.url}/search?search=${searchWord}&limit=${limit}&page=${page}`)
      .pipe(tap(users => {
        this.$users.next(users);
      }));
  }

}
