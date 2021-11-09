import {AfterViewInit, Component, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {NgScrollbar} from "ngx-scrollbar";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private scrollSubscription = Subscription.EMPTY;
  private mainMovingPaperElement: HTMLElement | null = null;
  private mainMovingPaperInsideElement: HTMLElement | null = null;
  private vhPixels: number = 0;

  // Get scrollbar component reference
  @ViewChild(NgScrollbar) scrollbarRef!: NgScrollbar;

  constructor(private zone: NgZone) {
  }

  ngAfterViewInit() {
    this.updateVhPixels();
    this.scrollSubscription = this.scrollbarRef.scrolled
      .pipe(
        filter(() => this.mainMovingPaperElement != null),
        map((e: Event) => (e.target as HTMLElement).scrollTop),
        filter((scrolled) => scrolled <= this.vhPixels),
      ).subscribe((scrolled) => this.zone.run(() => {
        const marginLeftInVw = scrolled / this.vhPixels * 100;
        this.mainMovingPaperElement!!.style.marginLeft = `${marginLeftInVw}vw`;
        this.mainMovingPaperInsideElement!!.style.marginLeft = `-${marginLeftInVw}vw`;
      }));
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  onActivateRouter($event: any) {
    this.mainMovingPaperElement = document.getElementById("main-page-moving-paper");
    this.mainMovingPaperInsideElement = document.getElementById("main-page-moving-paper-inside");
  }

  updateVhPixels() {
    this.vhPixels = this.scrollbarRef.nativeElement.offsetHeight;
  }
}
