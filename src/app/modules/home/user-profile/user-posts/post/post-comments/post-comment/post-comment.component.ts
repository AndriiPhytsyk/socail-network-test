import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../../../../../../services/posts.service';
import {CommentsService} from '../../../../../../../services/comments.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {

  imagePath: string;
  url: string;

  showedCommentInput = false;
  replyCommentInput = false;
  selectedFile = null;
  comment: string = '';
  subComment: string = '';
  forbiddenWord = 'developer';


  @Input() postComment;
  @Input() postId;

  constructor(private postsService: PostsService,
              private commentsService: CommentsService,
              private router: Router
  ) {
  }

  ngOnInit() {}

  showSubCommentInput() {
    this.replyCommentInput = !this.replyCommentInput;
  }


  addSubComment() {
    this.commentsService.replyToComment(this.subComment, this.postComment._id)
      .subscribe(res => {
        console.log(45, res);
        console.log(46, this.postComment);
        this.postComment.responses.unshift({text: this.subComment}); //todo
        this.replyCommentInput = false;
        this.subComment = '';
      });
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
