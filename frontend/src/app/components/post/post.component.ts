import {Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Post, PostStyle} from "../../pages/generic-posts/model/Post";
import {ViewRangePixels} from "../../pages/generic-posts/model/ViewRangePixels";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnChanges {
  @Input() postData!: Post
  @Input() viewRangePixels!: ViewRangePixels;
  animationTriggered: boolean = false;

  PostStyle = PostStyle;

  constructor(private elRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.animationTriggered && !!changes.viewRangePixels) {
      if (this.elRef.nativeElement.offsetTop < (changes.viewRangePixels.currentValue.to - 300)) {
        this.animationTriggered = true;
      }
    }
  }
}
