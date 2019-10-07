import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../models/user';
import {GLOBAL} from './global';
import {Observable} from 'rxjs';

// import {map, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get(`http://${GLOBAL.url}/users`);
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

}
