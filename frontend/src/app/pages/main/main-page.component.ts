import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild('mainPageMovingPaper') movingPaperRef!: ElementRef;
  @ViewChild('mainPageMovingPaperInside') movingPaperInside!: ElementRef;
  viewRangePixels: ViewRangePixels = new ViewRangePixels(0, 0);
}

export class ViewRangePixels {
  from: number;
  to: number;

  constructor(from: number, to: number) {
    this.from = from;
    this.to = to;
  }
}
