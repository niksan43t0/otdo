import {Component} from '@angular/core';
import {ViewRangePixels} from "../generic-posts/model/ViewRangePixels";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../generic-posts/model/Post";
import {GenericPageComponent} from "../generic-posts/model/GenericPageComponent";

@Component({
  selector: 'services',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements GenericPageComponent {
  viewRangePixels: ViewRangePixels = new ViewRangePixels(0, 0);
  posts: Post[];

  constructor(private route: ActivatedRoute) {
    this.posts = this.route.snapshot.data.posts;
  }
}
