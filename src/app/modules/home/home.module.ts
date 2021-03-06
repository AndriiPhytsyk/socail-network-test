import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
// import {SharedModule} from '../shared/shared.module';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditProfileComponent} from './user-profile/edit-profile/edit-profile.component';
import {UserInfoComponent} from './user-profile/user-info/user-info.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserMessagesComponent } from './user-profile/user-messages/user-messages.component';
import {UserPostsComponent} from './user-profile/user-posts/user-posts.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../../material.module';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import { ShareButtonModule } from '@ngx-share/button';
import {PostComponent} from './user-profile/user-posts/post/post.component';
import {ModalContainerComponent} from './user-profile/user-posts/post/modal-container-routable-modals';
import {PostPreviewComponent} from './user-profile/user-posts/post/post-preview/post-preview.component';



@NgModule({
  declarations: [
    HomeComponent,
    EditProfileComponent,
    UserInfoComponent,
    UserProfileComponent,
    UsersComponent,
    UserComponent,
    UserMessagesComponent,
    UserPostsComponent,
    PostComponent,
    ModalContainerComponent,
    PostPreviewComponent

  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonModule,
    SharedModule,
    TranslateModule
  ],
  entryComponents: [
    PostPreviewComponent
  ],

})
export class HomeModule { }
