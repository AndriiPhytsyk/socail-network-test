import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss'],

})
export class PostCommentsComponent implements OnInit {

  @Input() comments;
  @Input() postId;
  @Input() isReachingBottom;

  showedCommentsCount = 3;

  constructor() {}

  ngOnInit() {
    this.isReachingBottom.subscribe(isReachedBottom => {
      if (isReachedBottom) {
        this.showedCommentsCount += this.showedCommentsCount;
        this.isReachingBottom.next(false);
      }
    });

  }

  // @HostListener('scroll', ['$event'])
  // onScroll(): void {
  //   console.log($event);
  //   if (this.bottomReached()) {
  //     // this.elements = [...this.elements, this.count++];
  //     this.showedCommentsCount += this.showedCommentsCount;
  //   }
  // }
  //
  // bottomReached(): boolean {
  //   console.log(11,window.innerHeight);
  //   console.log(22,window.scrollY);
  //   console.log(33,document.body.offsetHeight);
  //   return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  // }
  //
  // postAdded(comment) {
  //   this.comments.push(comment);
  // }

}
