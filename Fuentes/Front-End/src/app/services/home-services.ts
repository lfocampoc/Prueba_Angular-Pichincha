import {
  ServicesRoutes,
  buildRoute
} from '@services/services-routes'
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ServiceUtils } from "./services-utils";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private http: HttpClient,
    private serviceUtils: ServiceUtils,
  ) { }

  public getProducts(): Observable<any> | null {
    return this.serviceUtils.buildRequest(ServicesRoutes.getProducts, 'get');
  }

  public deleteProducts(id: string): Observable<any> | null {
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.deleteProducts, {id: id}), 'delete');
  }
}