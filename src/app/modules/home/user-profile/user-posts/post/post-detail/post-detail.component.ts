import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../../../../../services/posts.service';
import {CommentsService} from '../../../../../../services/comments.service';

@Component({
  selector: 'post-detail',
  templateUrl: 'post-detail.component.html',
  styleUrls: ['post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {

  post: any;
  private isPostLoaded = false;
  showedCommentInput = false;
  replyCommentInput = false;


  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.postsService.getPostById(id)
        .subscribe(res => {
          console.log(23, res)
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

  addComment(comment) {
    console.log(61, comment);
    this.postsService.addComment(this.post.id, comment)
      .subscribe(res => {
        this.post.comments.push({text: comment, _id: this.post.id});
        this.showedCommentInput = false;
      });

  }

  addSubComment(subComment, commentId) {
    this.commentsService.replyToComment(subComment, commentId)
      .subscribe(res => {
        const index = this.post.comments.findIndex(comment => comment._id === commentId);
        this.post.comments[index].responses.unshift({text: subComment});
        this.replyCommentInput = false;
      });
  }

}
