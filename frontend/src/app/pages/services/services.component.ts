import {Component} from '@angular/core';

@Component({
  selector: 'services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  addingService: boolean = false;

  addNew() {
    this.addingService = true;
  }
}
