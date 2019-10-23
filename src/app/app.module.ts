import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {AuthModule} from './modules/auth/auth.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './modules/home/home.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ErrorInterceptor, JwtInterceptor} from './_helpers';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AlertComponent} from './modules/shared/components/alert';
import {AlertService} from './modules/shared/services/alert.service';
import {HttpModule} from '@angular/http';
import { ShareButtonModule } from '@ngx-share/button';
import {PostsService} from './services/posts.service';
import {SharedModule} from './modules/shared/shared.module';
import {CommonModule} from '@angular/common';
import {CommentsService} from './services/comments.service';

// AoT requires an exported function for factories

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AuthModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HomeModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule,
    ShareButtonModule,
    HttpModule,
    SharedModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    AlertService,
    PostsService,
    CommentsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
