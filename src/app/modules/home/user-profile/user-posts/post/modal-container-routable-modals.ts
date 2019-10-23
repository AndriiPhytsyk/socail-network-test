import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {PostComponent} from './post.component';
import {PostPreviewComponent} from './post-preview/post-preview.component';
import {PostsService} from '../../../../../services/posts.service';

@Component({
  selector: 'app-modal-container',
  template: ''
})
export class ModalContainerComponent implements OnInit, OnDestroy {
  destroy = new Subject<any>();
  currentDialog = null;
  post = {};

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.postsService.getPostById(params.id)
        .subscribe(res => {
          this.post = res.post;
          console.log('this.post', this.post);
          this.currentDialog = this.modalService.open(PostPreviewComponent, {centered: true});
          this.currentDialog.componentInstance.post = this.post;

          // Go back to home page after the modal is closed
          this.currentDialog.result.then(result => {
            // router.navigateByUrl('/');
          }, reason => {
            // router.navigateByUrl('/');
          });
        });
      // When router navigates on this component is takes the params and opens up the photo detail modal

    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
