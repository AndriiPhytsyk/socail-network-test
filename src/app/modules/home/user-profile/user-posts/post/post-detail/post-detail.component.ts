import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {PostsService} from '../../../../../../services/posts.service';
import {CommentsService} from '../../../../../../services/comments.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: 'post-detail.component.html',
  styleUrls: ['post-detail.component.scss']
})


export class PostDetailComponent implements OnInit {

  post: any;
  isPostLoaded = false;
  showedCommentInput = false;
  replyCommentInput = false;
  comment = '';
  subComment = '';
  selectedFile = null;
  forbiddenWord = 'developer';

  commentsCount = 0;
  isCommentsShown = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postsService: PostsService,
              private commentsService: CommentsService) {
  }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.postsService.getPostById(id)
        .subscribe(res => {
          console.log(23, res);
          this.post = res.post;
          this.isPostLoaded = true;
          this.commentsCount = res.post.comments.length;
        });
    });
  }

  showCommentInput() {
    this.showedCommentInput = !this.showedCommentInput;

  }

  showSubCommentInput() {
    this.replyCommentInput = !this.replyCommentInput;
  }

  addComment() {
    if (this.comment.includes(this.forbiddenWord)) {
      this.comment = this.comment.replace(/developer/, '***');
    }
    if (this.selectedFile) {
      const fd = new FormData();
      fd.append('image', this.selectedFile);
      fd.append('text', this.comment);
      this.postsService.addComment(this.post.id, fd)
        .subscribe(res => {
          this.post.comment.push(res.comment);
          this.showedCommentInput = false;
          this.comment = '';
        });
    } else {
      this.postsService.addComment(this.post.id, {text: this.comment})
        .subscribe(res => {
          console.log(74, res);
          this.post.comments.push(res.comment);
          this.showedCommentInput = false;
          this.comment = '';
        });
    }
  }

  addSubComment(commentId) {
    this.commentsService.replyToComment(this.subComment, commentId)
      .subscribe(res => {
        const index = this.post.comments.findIndex(comment => comment._id === commentId);
        this.post.comments[index].responses.unshift({text: this.subComment});
        this.subComment = '';
        this.replyCommentInput = false;
      });
  }

  hasUnsavedData() {
    return this.comment || this.subComment;
  }

  showComments() {
    this.isCommentsShown = !this.isCommentsShown;
  }

  showCommentsCount() {
    let subCommentsCount = 0;
    this.post.comments.forEach(comment => {
      subCommentsCount += comment.responses.length;
    });

    return this.post.comments.length + subCommentsCount;
  }

  onScroll(event) {
    console.log(11, event);
  }

}
