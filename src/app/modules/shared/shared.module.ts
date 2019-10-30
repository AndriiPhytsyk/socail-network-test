import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {ImageCropperModule} from 'ngx-image-cropper';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {ConfirmationDialogService} from './services/confirmation-dialog.service';
import {PaginationComponent} from './components/pagination/pagination.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ScrollEventModule} from 'ngx-scroll-event';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    PaginationComponent,
    ConfirmDialogComponent
  ],

  exports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
    ImageCropperModule,
    PaginationComponent,
    ScrollingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ScrollEventModule,
    MaterialModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ScrollEventModule,
    MaterialModule
  ],
  entryComponents: [ConfirmationDialogComponent],
  providers: [ConfirmationDialogService]
})

export class SharedModule {
}
