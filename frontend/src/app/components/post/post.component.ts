import {Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Post} from "../../pages/main/model/Post";
import {ViewRangePixels} from "../../pages/main/model/ViewRangePixels";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnChanges {
  @Input() postData!: Post
  @Input() pictureOnRight: boolean = false;
  @Input() viewRangePixels!: ViewRangePixels;
  animationTriggered: boolean = false;

  constructor(private elRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.animationTriggered && !!changes.viewRangePixels) {
      if (this.elRef.nativeElement.offsetTop < (changes.viewRangePixels.currentValue.to - 200)) {
        this.animationTriggered = true;
      }
    }
  }
}
