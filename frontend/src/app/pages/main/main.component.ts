import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private router: Router) {
  }

  navigateToServices() {
    this.router.navigate(["services"]);
  }
}
