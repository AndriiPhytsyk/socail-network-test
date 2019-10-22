import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {PostsService} from '../../../../../../services/posts.service';
import {CommentsService} from '../../../../../../services/comments.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'post-detail',
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

  showCommentsCount = 3;


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
    console.log(91, this.subComment)
    return this.comment || this.subComment;
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      // this.elements = [...this.elements, this.count++];
      this.showCommentsCount += this.showCommentsCount;
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
}
