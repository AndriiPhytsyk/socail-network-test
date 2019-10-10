﻿import {Injectable} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import {AlertType, Alert} from '../models/alert';


@Injectable()
export class AlertService {
  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  // subscribe to alerts
  getAlert(alertId?: string): Observable<any> {
    return this.subject.asObservable().filter((x: Alert) => x && x.alertId === alertId);
  }

  hideAlert() {
    setTimeout(() => {
      this.clear();
    }, 2000);
  }

  // convenience methods
  success(message: string) {
    this.alert(new Alert({message, type: AlertType.Success}));
    this.hideAlert();
  }

  error(message: string) {
    this.alert(new Alert({message, type: AlertType.Error}));
    this.hideAlert();
  }

  info(message: string) {
    this.alert(new Alert({message, type: AlertType.Info}));
    this.hideAlert();
  }

  warn(message: string) {
    this.alert(new Alert({message, type: AlertType.Warning}));
    this.hideAlert();
  }

  // main alert method
  alert(alert: Alert) {
    this.keepAfterRouteChange = alert.keepAfterRouteChange;
    this.subject.next(alert);
  }

  // clear alerts
  clear(alertId?: string) {
    this.subject.next(new Alert({alertId}));
  }
}
