import {AfterViewInit, Component, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {NgScrollbar} from "ngx-scrollbar";
import {filter} from "rxjs/operators";
import {MainPageComponent, ViewRangePixels} from "./pages/main/main-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private scrollSubscription = Subscription.EMPTY;
  private mainPageComponent: MainPageComponent | null = null;
  private vhPixels: number = 0;

  // Get scrollbar component reference
  @ViewChild(NgScrollbar) scrollbarRef!: NgScrollbar;

  constructor(private zone: NgZone) {
  }

  ngAfterViewInit() {
    this.updateVhPixels();
    this.scrollSubscription = this.scrollbarRef.scrolled
      .pipe(filter(() => this.mainPageComponent != null))
      .subscribe((e: Event) => this.zone.run(() => {
        const scrolled = (e.target as HTMLElement).scrollTop;
        this.mainPageComponent!!.viewRangePixels = new ViewRangePixels(scrolled, scrolled + this.vhPixels);
        if (scrolled <= this.vhPixels) { //TODO can move inside MainPageComponent if unneeded here
          const marginLeftInVw = scrolled / this.vhPixels * 100;
          this.mainPageComponent!!.movingPaperRef.nativeElement.style.marginLeft = `${marginLeftInVw}vw`;
          this.mainPageComponent!!.movingPaperInside.nativeElement.style.marginLeft = `-${marginLeftInVw}vw`;
        }
      }));
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  onActivateRouter(component: any) {
    this.mainPageComponent = component instanceof MainPageComponent ? component : null;
  }

  updateVhPixels() {
    this.vhPixels = this.scrollbarRef.nativeElement.offsetHeight;
  }
}
