import {AfterViewInit, Component, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {NgScrollbar} from "ngx-scrollbar";
import {filter} from "rxjs/operators";
import {MainPageComponent} from "./pages/main/main-page.component";
import {ViewRangePixels} from "./pages/generic-posts/model/ViewRangePixels";
import {GenericPageComponent} from "./pages/generic-posts/model/GenericPageComponent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private scrollSubscription = Subscription.EMPTY;
  private pageComponent: GenericPageComponent | null = null;
  private vhPixels: number = 0;

  // Get scrollbar component reference
  @ViewChild(NgScrollbar) scrollbarRef!: NgScrollbar;

  constructor(private zone: NgZone) {
  }

  ngAfterViewInit() {
    this.updateVhPixels();
    this.scrollSubscription = this.scrollbarRef.scrolled
      .pipe(filter(() => this.pageComponent != null))
      .subscribe((e: Event) => this.zone.run(() => {
        const scrolled = (e.target as HTMLElement).scrollTop;
        this.pageComponent!!.viewRangePixels = new ViewRangePixels(scrolled, scrolled + this.vhPixels);
        if (this.pageComponent instanceof MainPageComponent && scrolled <= this.vhPixels) { //TODO can move inside MainPageComponent if unneeded here
          const marginLeftInVw = scrolled / this.vhPixels * 100;
          this.pageComponent.movingPaperRef.nativeElement.style.marginLeft = `${marginLeftInVw}vw`;
          this.pageComponent.movingPaperInside.nativeElement.style.marginLeft = `-${marginLeftInVw}vw`;
        }
      }));
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  onActivateRouter(component: any) {
    this.scrollbarRef.scrollTo({top: 0, duration: 0});
    this.pageComponent = component;
  }

  updateVhPixels() {
    this.vhPixels = this.scrollbarRef.nativeElement.offsetHeight;
  }
}
