import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../../../../../../services/posts.service';
import {CommentsService} from '../../../../../../../services/comments.service';
import {Router} from '@angular/router';
import {DataService} from '../../../../../../../services/data.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],

})
export class PostCommentComponent implements OnInit {

  imagePath: string;
  url: string;

  showedCommentInput = false;
  replyCommentInput = false;
  selectedFile = null;
  comment = '';
  subComment = '';
  forbiddenWord = 'developer';
  isRepliesShown = false;
  @Input() postComment;
  @Input() postId;

  constructor(private postsService: PostsService,
              private commentsService: CommentsService,
              private router: Router,
              private dataService: DataService
  ) {
  }

  ngOnInit() {
  }

  showSubCommentInput() {
    this.replyCommentInput = !this.replyCommentInput;
    this.isRepliesShown = true;
  }

  addSubComment() {
    this.commentsService.replyToComment(this.subComment, this.postComment._id)
      .subscribe(res => {
        this.postComment.responses.push({text: this.subComment}); // todo
        this.replyCommentInput = false;
        this.subComment = '';
      });
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

  showReplies() {
    this.isRepliesShown = !this.isRepliesShown;
    this.replyCommentInput = true;
  }
}
