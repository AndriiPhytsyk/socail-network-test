import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() id: string;

  constructor() {
  }

  ngOnInit() {
  }
}
