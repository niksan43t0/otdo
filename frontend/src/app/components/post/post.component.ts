import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() pictureOnRight: boolean = false;
  @Input() triggerAnimation: boolean = false;

  @ViewChild('img') imgRef!: ElementRef;
  @ViewChild('text') textRef!: ElementRef;

  constructor() {
    setTimeout(() => {
      this.imgRef.nativeElement.classList.add("fade-in");
      this.textRef.nativeElement.classList.add("fade-in");
    }, 1000)
  }
}
