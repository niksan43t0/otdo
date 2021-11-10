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
  currentScrollPosition: number = 0;

  constructor(private router: Router) {
    setInterval(() => {
      console.log(this.currentScrollPosition);
    }, 1000)
  }

  navigateToServices() {
    this.router.navigate(["services"]);
  }
}
