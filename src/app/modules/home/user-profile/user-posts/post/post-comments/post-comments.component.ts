import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../../../../../services/posts.service';
import {CommentsService} from '../../../../../../services/comments.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  @Input() comments;
  @Input() postId;

  constructor() {}

  ngOnInit() {
  }

}
