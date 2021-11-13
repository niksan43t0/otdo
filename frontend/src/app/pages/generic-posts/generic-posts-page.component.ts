import {Component, Input} from '@angular/core';
import {ViewRangePixels} from "./model/ViewRangePixels";
import {Post} from "./model/Post";

@Component({
  selector: 'generic-posts',
  templateUrl: './generic-posts-page.component.html',
  styleUrls: ['./generic-posts-page.component.scss']
})
export class GenericPostsPageComponent {
  @Input() posts!: Post[];
  @Input() viewRangePixels!: ViewRangePixels;
}
