import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "./model/Service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private readonly domain: string;

  constructor(private http: HttpClient) {
    this.domain = environment._SERVER + '/services'
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.domain)
  }

  saveService(service: Service): Observable<number> {
    return this.http.post<number>(this.domain, service);
  }
}
