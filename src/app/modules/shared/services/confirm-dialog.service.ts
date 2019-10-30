import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../components/confirm-dialog/confirm-dialog.component';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ConfirmDialogService {

  constructor(public dialog: MatDialog) {
  }

  confirm(title: string, content: string, confirmButtonLabel: string, closeButtonLabel: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title,
        content,
        confirmButtonLabel,
        closeButtonLabel
      }
    });

    return dialogRef.afterClosed()
      .pipe(map( res => res === 'true'));
  }
}
