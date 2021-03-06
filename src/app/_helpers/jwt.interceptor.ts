import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError, BehaviorSubject} from 'rxjs';
import {catchError, filter, take, switchMap, finalize} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> | any {

    if (this.authService.getAccessToken()) {
      request = this.addToken(request, this.authService.getAccessToken());
    }
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401 && !request.url.match(/auth\/token\/refresh/)) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    if (request.url.match(/auth\/token\/refresh/)) {
      token = this.authService.getRefreshToken();
    }
    return request.clone({
      setHeaders: {
        Authorization: token
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((result: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(result.tokens.accessToken);
          return next.handle(this.addToken(request, result.tokens.accessToken));
        }),
        catchError(err => {
          return this.authService.logout() as any;
        }),
        finalize(() => {
          this.isRefreshing = false;
        }));
    } else {
      this.isRefreshing = false;
      return this.refreshTokenSubject.pipe(
        filter(token => {
          return token != null;
        }),
        take(1),
        switchMap(accessToken => {
          return next.handle(this.addToken(request, accessToken));
        }));
    }
  }
}
