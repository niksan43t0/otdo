import {Component, ElementRef, ViewChild} from '@angular/core';
import {ViewRangePixels} from "../generic-posts/model/ViewRangePixels";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../generic-posts/model/Post";
import {GenericPageComponent} from "../generic-posts/model/GenericPageComponent";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements GenericPageComponent {
  @ViewChild('mainPageMovingPaper') movingPaperRef!: ElementRef;
  @ViewChild('mainPageMovingPaperInside') movingPaperInside!: ElementRef;
  viewRangePixels: ViewRangePixels = new ViewRangePixels(0, 0);
  posts: Post[];

  constructor(private route: ActivatedRoute) {
    this.posts = this.route.snapshot.data.posts;
  }
}
