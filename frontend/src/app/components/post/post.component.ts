import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger('fadeInLeft', [
      transition('fadeStart => fadeEnd', animate('1000ms ease-in', keyframes([
        style({
          opacity: 0,
          "-webkit-transform": 'translateX(-20px)',
          transform: 'translateX(-20px)'
        }),
        style({
          opacity: 1,
          "-webkit-transform": 'translateX(0)',
          transform: 'translateX(0)'
        }),
      ]))),
    ]),
    trigger('fadeInRight', [
      transition('fadeStart => fadeEnd', animate('1000ms ease-in', keyframes([
        style({
          opacity: 0,
          "-webkit-transform": 'translateX(20px)',
          transform: 'translateX(20px)'
        }),
        style({
          opacity: 1,
          "-webkit-transform": 'translateX(0)',
          transform: 'translateX(0)'
        }),
      ]))),
    ])],
})
export class PostComponent {
  @Input() pictureOnRight: boolean = false;

  @ViewChild('img') imgRef!: ElementRef;
  @ViewChild('text') textRef!: ElementRef;
  fadeState: string = 'fadeStart';

  constructor() {
    setTimeout(() => {
      this.fadeState = 'fadeEnd'; //detect on change ot @Input i also call dolniq red
      this.imgRef.nativeElement.classList.remove("opacity-0");
      this.textRef.nativeElement.classList.remove("opacity-0");
    }, 2000)
  }
}
