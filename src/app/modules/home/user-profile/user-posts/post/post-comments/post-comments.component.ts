import {Component, HostListener, Input, OnInit} from '@angular/core';
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

  showedCommentsCount = 3;

  constructor() {}

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      // this.elements = [...this.elements, this.count++];
      this.showedCommentsCount += this.showedCommentsCount;
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

}
