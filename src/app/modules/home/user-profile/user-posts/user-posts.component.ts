import {Component, OnInit, ViewChild} from '@angular/core';
import {PostsService} from '../../../../services/posts.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../../../services/user.service';
import {Post} from '../../../../interfaces/post/post';

@Component({
  selector: 'app-users-posts',
  templateUrl: 'user-posts.component.html',
  styleUrls: ['user-posts.component.scss']
})

export class UserPostsComponent implements OnInit {

  @ViewChild('socialShare', {static: false}) socialShare;
  @ViewChild('shareFacebook', {static: false}) shareFacebook;
  @ViewChild('addPost', {static: false}) addPost;

  posts: Post[] = [];
  postText = '';
  fileData: File = null;
  previewUrl: any = null;

  constructor(
    private postsService: PostsService,
    private userService: UserService) {
  }


  ngOnInit() {
    this.postsService.getMyPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  fileProgress(fileInput: any) {
    console.log(fileInput);
    this.fileData = fileInput.target.files[0] as File;
    this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.previewUrl = reader.result;
    };
  }

  createPost() {
    const formData = new FormData();
    formData.append('image', this.fileData);
    formData.append('text', this.postText);
    this.postsService.createPost(formData)
      .subscribe(res => {
        console.log(63,res);
        const {post} = res;
        post.images[0] = this.previewUrl;
        // this.uploadedFilePath = res.data.filePath;
        this.posts.unshift(post);
        this.postText = '';
        this.previewUrl = null;
      });
  }

  postDeleted(id) {
    const index = this.posts.findIndex(item => item.id === id);
    this.posts.splice(index, 1);
  }
}
