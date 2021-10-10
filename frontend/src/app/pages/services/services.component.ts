import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Service} from "./model/Service";
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "./services.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [];
  creatingNewService: boolean = false;
  savingNewService: boolean = false;

  serviceFormGroup: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    fromAmount: new FormControl("", [Validators.required, Validators.min(0)]),
    toAmount: new FormControl("", [Validators.min(0)]), //TODO validation min = fromAmount
  });

  constructor(private route: ActivatedRoute, private servicesService: ServicesService) {
    this.services = this.route.snapshot.data.services;
  }

  addNew() {
    this.serviceFormGroup.patchValue({name: null, fromAmount: null, toAmount: null});
    this.creatingNewService = true;
  }

  saveService() {
    this.serviceFormGroup.markAllAsTouched();
    if (this.serviceFormGroup.valid) {
      this.savingNewService = true;
      this.servicesService.saveService({...this.serviceFormGroup.value})
        .pipe(finalize(() => this.savingNewService = false))
        .subscribe((id) => {
          this.services = [...this.services, {...this.serviceFormGroup.value, id}];
          this.creatingNewService = false;
        });
    }
  }
}
