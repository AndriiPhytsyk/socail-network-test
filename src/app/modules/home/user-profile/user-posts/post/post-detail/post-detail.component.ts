import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostsService} from '../../../../../../services/posts.service';
import {CommentsService} from '../../../../../../services/comments.service';
import {BehaviorSubject} from 'rxjs';
import {DataService} from '../../../../../../services/data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: 'post-detail.component.html',
  styleUrls: ['post-detail.component.scss']
})


export class PostDetailComponent implements OnInit {

  post: any;
  isPostLoaded = false;
  comment = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postsService: PostsService,

  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.postsService.getPostById(id)
        .subscribe(res => {
          this.post = res.post;
          this.isPostLoaded = true;
        });
    });
  }

  hasUnsavedData() {
    return false;
  }

}
