import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from '../../../../../services/user.service';
import {PostsService} from '../../../../../services/posts.service';
import {ConfirmationDialogService} from '../../../../shared/services/confirmation-dialog.service';
import {CommentsService} from '../../../../../services/comments.service';

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
  @Output() onPostDeleted = new EventEmitter();

  postComment: string;
  showedCommentInput = false;
  selectedFile = null;
  forbiddenWord = 'developer';
  imagePath = '';
  url = '';


  constructor(
    private userService: UserService,
    private postsService: PostsService,
    private confirmationDialogService: ConfirmationDialogService,
    private commentsService: CommentsService
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(36, this.comments);
  }

  deletePost(id) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete post ?')
      .then((confirmed) => {
        if (confirmed) {
          this.postsService.deletePost(id)
            .subscribe(res => {
              console.log(44, res)
              this.onPostDeleted.emit(id);
            });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  showCommentInput() {
    this.showedCommentInput = !this.showedCommentInput;
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
          this.comments.push(res.comment);
          this.showedCommentInput = false;
          this.postComment = '';
        });
    }
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = <File> event.target.files[0];
      const reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result as string; //add source to image
      };
    }
  }


}
