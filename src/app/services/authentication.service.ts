import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global';
import {Tokens} from '../models/tokens';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly JWT_TOKEN = 'AccessToken';
  private readonly REFRESH_TOKEN = 'RefreshToken';
  private loggedUser: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(user: { login: string, password: string }) {
    return this.http.post<any>(`http://${GLOBAL.url}/auth/login`, user)
      .pipe(tap(result => {
        console.log(result);
        this.storeTokens(result.tokens);
      }));
  }


  isLoggedIn() {
    return !!this.getAccessToken();
  }

  refreshToken() {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Authorization', this.getRefreshToken());
    return this.http.get<any>(`http://${GLOBAL.url}auth/token/refresh`, {
      headers
    }).pipe(tap((result) => {
      this.storeTokens(this.storeTokens(result.tokens));
    }));
  }

  getAccessToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeAccessToken(jwt:string  ) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.accessToken);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }


  logout() {
    this.router.navigate(['/login']);
    this.removeTokens();

  }

  forgotPassword(email) {
    return this.http.post(`http://${GLOBAL.url}/auth/forgotPassword`, {email});
  }

  changePassword(password, token) {
    return this.http.post(`http://${GLOBAL.url}/auth/resetPassword`, {password, token});
  }


}
