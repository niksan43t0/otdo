import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Service} from "./model/Service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [];
  addingService: boolean = false;

  serviceFormGroup: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    fromAmount: new FormControl("", [Validators.required, Validators.min(0)]),
    toAmount: new FormControl("", [Validators.min(0)]),
  });

  constructor(private route: ActivatedRoute) {
    this.services = this.route.snapshot.data.services;
  }

  addNew() {
    this.addingService = true;
    this.serviceFormGroup.patchValue({name: null, fromAmount: null, toAmount: null});
  }

  saveService() {
    this.addingService = false;
  }
}
