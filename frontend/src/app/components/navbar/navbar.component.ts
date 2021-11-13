import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  Page = Page;

  constructor(private router: Router) {
  }

  get currentPage(): Page {
    return this.router.url.startsWith("/services") ? Page.SERVICES :
      this.router.url.startsWith("/machines") ? Page.MACHINES :
        this.router.url.startsWith("/history") ? Page.HISTORY :
          this.router.url.startsWith("/prices") ? Page.PRICES :
            this.router.url.startsWith("/gallery") ? Page.GALLERY :
              Page.NOT_FOUND;
  }
}

export enum Page {
  HOME = "HOME",
  SERVICES = "SERVICES",
  MACHINES = "MACHINES",
  HISTORY = "HISTORY",
  PRICES = "PRICES",
  GALLERY = "GALLERY",
  NOT_FOUND = "NOT FOUND",
}

