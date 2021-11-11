import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Service} from "./model/Service";
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "./services.service";
import {filter, finalize, switchMap} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationModalComponent} from "../../components/confirmation-modal/confirmation-modal.component";

@Component({
  selector: 'services-component',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  services: Service[] = [];
  creatingOrEditingService: boolean = false;
  editingServiceId: number | null | undefined = null;
  savingNewService: boolean = false;

  serviceFormGroup: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    fromAmount: new FormControl("", [Validators.required, Validators.min(0)]),
    toAmount: new FormControl("", [Validators.min(0)]), //TODO validation min = fromAmount
  });

  constructor(private route: ActivatedRoute, private servicesService: ServicesService, private dialogService: MatDialog) {
    this.services = this.route.snapshot.data.services;
  }

  editOrAddNew(service?: Service) {
    if (service != null) {
      this.serviceFormGroup.setValue({name: service.name, fromAmount: service.fromAmount, toAmount: service.toAmount,});
    } else this.serviceFormGroup.setValue({name: null, fromAmount: null, toAmount: null,});
    this.serviceFormGroup.markAsUntouched();
    this.creatingOrEditingService = true;
    this.editingServiceId = service?.id;
  }

  saveService() {
    this.serviceFormGroup.markAllAsTouched();
    if (this.serviceFormGroup.valid) {
      this.savingNewService = true;
      this.servicesService.saveService({...this.serviceFormGroup.value, id: this.editingServiceId})
        .pipe(finalize(() => this.savingNewService = false))
        .subscribe((savedServiceId) => {
          const editedServiceIndex = this.services.findIndex(it => it.id == savedServiceId);
          if (editedServiceIndex != -1) {
            this.services[editedServiceIndex] = {...this.serviceFormGroup.value, id: savedServiceId};
          } else {
            this.services = [...this.services, {...this.serviceFormGroup.value, id: savedServiceId}];
          }
          this.creatingOrEditingService = false;
        });
    }
  }

  cancel() {
    this.creatingOrEditingService = false;
  }

  openDeleteModal(service: Service) {
    this.dialogService.open(ConfirmationModalComponent, {
      data: {
        title: "Сигурни ли сте?",
        message: `Ще изтриете услуга ${service.name}.`,
      }
    }).afterClosed()
      .pipe(
        filter((result) => result),
        switchMap(() => this.servicesService.deleteService(service.id)),
      ).subscribe(() => this.services = this.services.filter(it => it.id != service.id));
  }
}
