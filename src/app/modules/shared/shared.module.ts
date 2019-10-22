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
// import {ShareButtonModule} from '@ngx-share/button';
// import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    PaginationComponent
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
    ScrollingModule

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule

  ],

  entryComponents: [ConfirmationDialogComponent],
  providers: [ConfirmationDialogService]

})
export class SharedModule {
}
