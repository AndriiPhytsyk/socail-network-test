import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostsService} from '../../../../../../services/posts.service';
import {CommentsService} from '../../../../../../services/comments.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataService} from '../../../../../../services/data.service';
import {take} from 'rxjs/operators';

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
              private dataService: DataService

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
    this.dataService.cleanInputs();
  }

  hasUnsavedData() {
    return this.dataService.isDirtyInputs();
  }
}
