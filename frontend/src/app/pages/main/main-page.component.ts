import {Component, ElementRef, ViewChild} from '@angular/core';
import {ViewRangePixels} from "./model/ViewRangePixels";
import {ActivatedRoute} from "@angular/router";
import {Post} from "./model/Post";

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild('mainPageMovingPaper') movingPaperRef!: ElementRef;
  @ViewChild('mainPageMovingPaperInside') movingPaperInside!: ElementRef;
  viewRangePixels: ViewRangePixels = new ViewRangePixels(0, 0);
  posts: Post[]

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.data.posts);
    this.posts = this.route.snapshot.data.posts;
  }
}
