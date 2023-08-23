import { Injectable } from "@angular/core";
import { ServicesRoutes, buildRoute} from '@services/services-routes'
import { ServiceUtils } from "./services-utils";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  constructor(
    private serviceUtils: ServiceUtils,
  ) { }

  public checkProduct(id: string): Observable<any> | null {
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.checkProducts, {id: id}), 'get');
  }

  public createProducts(rowData: any): Observable<any> | null {
    return this.serviceUtils.buildRequest(ServicesRoutes.postProducts, 'post', rowData);
  }

  public putProducts(rowData: any): Observable<any> | null {
    return this.serviceUtils.buildRequest(ServicesRoutes.putProducts, 'put', rowData);
  }
}