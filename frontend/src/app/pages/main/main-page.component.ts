import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild('mainPageMovingPaper') movingPaperRef!: ElementRef;
  @ViewChild('mainPageMovingPaperInside') movingPaperInside!: ElementRef;

  constructor(private router: Router) {
  }

  navigateToServices() {
    this.router.navigate(["services"]);
  }
}
