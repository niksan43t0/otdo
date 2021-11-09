import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  numbers: number[];

  constructor(private router: Router) {
    this.numbers = Array(2000).fill(0).map((x, i) => i);
  }

  navigateToServices() {
    this.router.navigate(["services"]);
  }
}
