import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {ServicesService} from "./services.service";
import {Service} from "./model/Service";

@Injectable()
export class ServicesResolver implements Resolve<Service[]> {
  constructor(private servicesService: ServicesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Service[]> {
    return this.servicesService.getServices();
  }
}
