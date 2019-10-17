import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from '../../../../../services/user.service';
import {PostsService} from '../../../../../services/posts.service';
import {ConfirmationDialogService} from '../../../../shared/services/confirmation-dialog.service';
import {CommentsService} from '../../../../../services/comments.service';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.scss']
})

export class PostComponent implements OnInit {

  @Input() text: string;
  @Input() image: string;
  @Input() id: string;
  @Input() comments: any;
  @Output() onPostDeleted = new EventEmitter();

  public imagePath;
  url: string;
  showedCommentInput = false;
  replyCommentInput = false;

  selectedFile = null;

  // @ViewChild() addPost;

  constructor(
    private userService: UserService,
    private postsService: PostsService,
    private confirmationDialogService: ConfirmationDialogService,
    private commentsService: CommentsService
  ) {
  }

  ngOnInit() {
    this.userService.getUsersMe()
      .subscribe(res => console.log(37, res));
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

  showSubCommentInput() {
    this.replyCommentInput = !this.replyCommentInput;
  }

  addComment(comment) {
    if (this.selectedFile) {
      const fd = new FormData();
      fd.append('image', this.selectedFile);
      fd.append('text', comment);
      this.postsService.addComment(this.id, fd)
        .subscribe(res => {
          this.comments.push(res.comment);
          this.showedCommentInput = false;
        });
    } else {
      this.postsService.addComment(this.id, {text: comment})
        .subscribe(res => {
          this.comments.push(res.comment);
          this.showedCommentInput = false;
        });
    }
  }

  addSubComment(subComment, commentId) {
    this.commentsService.replyToComment(subComment, commentId)
      .subscribe(res => {
        const index = this.comments.findIndex(comment => comment._id === commentId);
        this.comments[index].responses.unshift({text: subComment});
        this.replyCommentInput = false;
      });
  }


  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = <File> event.target.files[0];
      const reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result; //add source to image
      };
    }
  }
}
