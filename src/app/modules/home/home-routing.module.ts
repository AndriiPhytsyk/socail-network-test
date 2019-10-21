import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';

import {HomeComponent} from './home.component';
import {UserComponent} from './users/user/user.component';
import {EditProfileComponent} from './user-profile/edit-profile/edit-profile.component';
import {UserMessagesComponent} from './user-profile/user-messages/user-messages.component';
import {UserInfoComponent} from './user-profile/user-info/user-info.component';
import {UserPostsComponent} from './user-profile/user-posts/user-posts.component';
import {ModalContainerComponent} from './user-profile/user-posts/post/modal-container-routable-modals';
import {PostEditComponent} from './user-profile/user-posts/post/post-edit/post-edit.component';
import {PostDetailComponent} from './user-profile/user-posts/post/post-detail/post-detail.component';
import {CanDeactivateGuard} from '../../guards/can-deactivate';


const routes: Routes = [
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, children: [
      {path: 'users/me/edit', component: EditProfileComponent},
      {path: 'users/me/messages', component: UserMessagesComponent},
      {path: 'users/me/posts/edit/:id', component: PostEditComponent},
      {path: 'users/me/posts/detail/:id', component: PostDetailComponent, canDeactivate: [CanDeactivateGuard]},
      {path: 'users/me/posts/:id', component: ModalContainerComponent},
      {path: 'users/me/posts', component: UserPostsComponent},
      {path: 'users/me', component: UserInfoComponent},
      {path: 'users/:id', component: UserComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
