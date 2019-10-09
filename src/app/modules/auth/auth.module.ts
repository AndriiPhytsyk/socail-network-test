import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";

import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {MaterialModule} from "../../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from '../shared/shared.module';
import { RestorePasswordComponent } from './forgot-password/restore-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("138909711578-7r6rch40d6311p5jenfcp4177muemkv2.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("513151245932065")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    RestorePasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }]
})
export class AuthModule { }
