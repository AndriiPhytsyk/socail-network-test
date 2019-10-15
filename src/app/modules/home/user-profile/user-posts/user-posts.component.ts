import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import {faPinterest} from '@fortawesome/free-brands-svg-icons/faPinterest';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PostsService} from '../../../../services/posts.service';

@Component({
  selector: 'app-users-posts',
  templateUrl: 'user-posts.component.html'
})

export class UserPostsComponent implements OnInit, AfterViewInit {

  @ViewChild('socialShare', {static: false}) socialShare;
  @ViewChild('shareFacebook', {static: false}) shareFacebook;

  posts = [];



  constructor(private dialog: MatDialog, private postService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

  ngAfterViewInit() {
    console.log(11, this.shareFacebook);
  }

  // openSocialShareModal() {
  //
  //     const dialogConfig = new MatDialogConfig();
  //
  //     dialogConfig.disableClose = false;
  //     dialogConfig.autoFocus = true;
  //
  //     this.dialog.open(this.socialShare, dialogConfig);
  // }


}
