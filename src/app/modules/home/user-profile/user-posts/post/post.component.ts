import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from '../../../../../services/user.service';
import {PostsService} from '../../../../../services/posts.service';
import {ConfirmationDialogService} from '../../../../shared/services/confirmation-dialog.service';
import {CommentsService} from '../../../../../services/comments.service';
import {ScrollEvent} from 'ngx-scroll-event';
import {BehaviorSubject} from 'rxjs';

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

  postComment = '';
  showedCommentInput = false;
  isCommentsShown = false;
  selectedFile = null;
  forbiddenWord = 'developer';
  imagePath = '';
  url = '';

  isReachingBottom = new BehaviorSubject(false);

  constructor(
    private userService: UserService,
    private postsService: PostsService,
    private confirmationDialogService: ConfirmationDialogService,
    private commentsService: CommentsService
  ) {
  }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(36, this.comments);
  }

  deletePost(id) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete post ?')
      .then((confirmed) => {
        if (confirmed) {
          this.postsService.deletePost(id)
            .subscribe(res => {
              this.postDeleted.emit(id);
            });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
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
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0] as File;
      const reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = () => { // called once readAsDataURL is completed
        this.url = reader.result as string; // add source to image
      };
    }
  }

  public handleScroll(event: ScrollEvent) {
    console.log('scroll occurred', event.originalEvent);
    if (event.isReachingBottom && !event.isWindowEvent) {
      this.isReachingBottom.next(true);
      console.log(111, this.isReachingBottom);
      console.log(`the user is reaching the bottom`);
    }
    // if (event.isReachingTop) {
    //   console.log(`the user is reaching the bottom`);
    // }
    // if (event.isWindowEvent) {
    //   console.log(`This event is fired on Window not on an element.`);
    // }

  }

  showCommentInput() {
    this.showedCommentInput = !this.showedCommentInput;
    this.isCommentsShown = true;
  }

  showComments() {
    this.showedCommentInput = !this.showedCommentInput;
  }

  showCommentsCount() {
    let subCommentsCount = 0;
    this.comments.forEach(comment => {
      subCommentsCount += comment.responses.length;
    });

    return this.comments.length + subCommentsCount;
  }

  hasUnsavedData() {
    console.log(133, this.postComment);
    return this.postComment;
  }


}

