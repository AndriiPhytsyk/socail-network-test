import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../../../../services/posts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../../services/user.service';
import { Post } from '../../../../interfaces/post/post';
import 'quill-mention';

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

  byPassedHTMLString: string;
  editorContent: string;


  atValues = [
    { id: 1, value: 'Fredrik Sundqvist', link: 'https://google.com' },
    { id: 2, value: 'Patrik Sjölin' }
  ];
  hashValues = [
    { id: 3, value: 'Fredrik Sundqvist 2' },
    { id: 4, value: 'Patrik Sjölin 2' }
  ];

  config = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['code-block']
    ],
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ['@', '#', '/'],
      source: (searchTerm, renderList, mentionChar) => {
        let values;

        if (mentionChar === '@') {
          values = this.atValues;
        } else {
          values = this.hashValues;
        }

        if (searchTerm.length === 0) {
          renderList(values, searchTerm);
        } else {
          const matches = [];
          for (let i = 0; i < values.length; i++) {
            if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) { matches.push(values[i]); }
          }
          renderList(matches, searchTerm);
        }
      },
    },

  };

  onContentChanged(e) {
    console.log(35, e);
    // this.byPassedHTMLString = html;
    // this.byPassedHTMLString = quill;
    // this.byPassedHTMLString = text;
  }

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
    console.log(58, this.postText);
    const formData = new FormData();
    formData.append('image', this.fileData);
    formData.append('text', this.postText);
    this.postsService.createPost(formData)
      .subscribe(res => {
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
