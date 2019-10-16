import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from '../../../../../services/user.service';
import {PostsService} from '../../../../../services/posts.service';
import {ConfirmationDialogService} from '../../../../shared/services/confirmation-dialog.service';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.scss']
})

export class PostComponent implements OnInit {

  @Input() text: string;
  @Input() image: string;
  @Input() id: string;
  @Output() onPostDeleted = new EventEmitter();

  comment: string;

  showedCommentInput = false;
  replyCommentInput = false;

  comments = [];

  // @ViewChild() addPost;

  constructor(
    private userService: UserService,
    private postService: PostsService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
  }

  ngOnInit() {
  }

  deletePost(id) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete post ?')
      .then((confirmed) => {
        if (confirmed) {
          this.postService.deletePost(id)
            .subscribe(res => {
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
    this.comments.unshift(comment);

  }

  addSubComment(subComment) {
  }

}
