import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import {faPinterest} from '@fortawesome/free-brands-svg-icons/faPinterest';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-post-preview',
  templateUrl: 'post-preview-component.html'
})

export class PostPreviewComponent implements OnInit {

  @Input() post;

  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;

  constructor(public fa: FontAwesomeModule, private title: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.meta.updateTag({ name: 'og:title', content: this.post.title });
    this.meta.updateTag({ name: 'og:description', content: this.post.description });
    this.meta.updateTag({ name: 'og:image', content: this.post.image });
  }


}
