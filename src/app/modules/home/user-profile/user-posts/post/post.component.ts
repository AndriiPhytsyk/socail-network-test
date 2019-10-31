import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { PostsService } from '../../../../../services/posts.service';
import { ConfirmationDialogService } from '../../../../shared/services/confirmation-dialog.service';
import { CommentsService } from '../../../../../services/comments.service';
import { ScrollEvent } from 'ngx-scroll-event';
import { BehaviorSubject } from 'rxjs';
import { ConfirmDialogService } from '../../../../shared/services/confirm-dialog.service';
import { DataService } from '../../../../../services/data.service';
import { Router } from '@angular/router';
// import { CKEditorComponent } from 'ng2-ckeditor/ckeditor.component';



@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.scss']
})

export class PostComponent implements OnInit, AfterViewInit {

  @Input() text: string;
  @Input() image: string;
  @Input() id: string;
  @Input() comments: any;
  @Output() postDeleted = new EventEmitter();

  // @ViewChild(CKEditorComponent, {static: false}) ckEditor: CKEditorComponent;


  postComment = '';
  showedCommentInput = false;
  isCommentsShown = false;
  selectedFile = null;
  forbiddenWord = 'developer';
  imagePath = '';
  url = '';
  // ckeditorContent = '<b>Hello</b>'

  isReachingBottom = new BehaviorSubject(false);
  //
  // onEditorChange(e) {
  //   console.log(e);
  // }

  // ngAfterViewChecked() {
  //   let editor = this.ckEditor.instance;
  //   editor.config.height = '400';
  //
  // }

  constructor(
    private userService: UserService,
    private postsService: PostsService,
    private confirmDialogService: ConfirmDialogService,
    private confirmationDialogService: ConfirmationDialogService,
    private commentsService: CommentsService,
    private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(36, this.comments);
  }

  deletePost(id) {
    this.confirmDialogService.confirm('Підтвердження', 'Ви дійсно хочете видалити це пост?', 'Так', 'Ні')
      .subscribe((confirmed) => {
        if (confirmed) {
          this.postsService.deletePost(id)
            .subscribe(res => {
              this.postDeleted.emit(id);
              this.router.navigate(['/users/me/posts']);
            });
        }
      });
  }


  addComment() {
    if (this.postComment.includes(this.forbiddenWord)) {
      this.postComment = this.postComment.replace(/developer/, '***');
    }
    if (this.selectedFile) {
      const fd = new FormData();
      fd.append('image', this.selectedFile);
      fd.append('text', this.postComment);
      this.postsService.addComment(this.id, fd)
        .subscribe(res => {
          this.comments.push(res.comment);
          this.showedCommentInput = false;
          this.postComment = '';
        });
    } else {
      this.postsService.addComment(this.id, {text: this.postComment})
        .subscribe(res => {

          this.comments.unshift(res.comment);
          this.showedCommentInput = false;
          this.postComment = '';
        });
    }
  }

  onSelectFile(event) { // called each time file input changes
    console.log(90, event);
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0] as File;
      const reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = () => { // called once readAsDataURL is completed
        if (event.target.files[0].name.includes('.docx')) {
          return this.url = '../../../../../../assets/images/upload-files/docx.png';
        }
        if (event.target.files[0].name.includes('.txt')) {
          return this.url = '../../../../../../assets/images/upload-files/txt.png';
        }
        this.url = reader.result as string; // add source to image
      };
    }
  }

  public handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom && !event.isWindowEvent) {
      this.isReachingBottom.next(true);
    }
  }

  showCommentInput() {
    this.showedCommentInput = true;
    this.isCommentsShown = true;
  }

  showComments() {
    this.showedCommentInput = !this.showedCommentInput;
    this.isCommentsShown = !this.isCommentsShown;

  }

  showCommentsCount() {
    if (this.comments) {
      let subCommentsCount = 0;
      this.comments.forEach(comment => {
        subCommentsCount += comment.responses.length;
      });

      return this.comments.length + subCommentsCount;
    }

  }

  watchInputValue() {
    this.dataService.commentInputValue(this.postComment);
  }

}

