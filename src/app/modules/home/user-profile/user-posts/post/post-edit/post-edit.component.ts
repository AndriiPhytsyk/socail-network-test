import {Component, EventEmitter, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostsService} from '../../../../../../services/posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  post: any;
  isPostLoaded = false;
  previewUrl: any = null;
  fileData: File = null;

  onPostEdited = new EventEmitter();

  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.postsService.getPostById(id)
        .subscribe(res => {
          this.post = res.post;
          this.isPostLoaded = true;
          console.log(' this.post', this.post);
        });
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
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
  }

  editPost() {
    const formData = new FormData();
    formData.append('image', this.fileData);
    formData.append('text', this.post.text);
    this.postsService.updatePost(formData, this.post.id)
      .subscribe(res => {
        this.router.navigate(['/users/me/posts']);
        // this.uploadedFilePath = res.data.filePath;
      });
  }



}
