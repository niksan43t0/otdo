import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  numbers: number[];

  constructor(private router: Router) {
    this.numbers = Array(2000).fill(0).map((x, i) => i);
  }

  navigateToServices() {
    this.router.navigate(["services"]);
  }
}
