import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private router: Router) {
  }

  navigateToServices() {
    this.router.navigate(["services"]);
  }
}
