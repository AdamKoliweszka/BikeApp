import { Injectable } from "@angular/core";
import { Route } from "../../models/Route/route";
import { LocationService } from "../location/location.service";
import { Subscription, Subject, Observable } from "rxjs";
import { RoutePoint } from "../../models/RoutePoint/route-point";
import { RouteSegment } from "src/app/models/RouteSegment/route-segment";
import { ActualRouteDataService } from "../store/actual-route-data.service";

@Injectable({
  providedIn: "root"
})
export class RouteRegisterService {
  private actualRoute: Route;
  private lastPoint: RoutePoint;
  private isActive: boolean;
  actualPosition$: Observable<
    RoutePoint
  > = this.actualRouteDataService.getPosition();
  constructor(private actualRouteDataService: ActualRouteDataService) {
    this.isActive = false;
    this.actualRoute = new Route();
    this.actualPosition$.subscribe(data => {
      let point = data;
      if (this.lastPoint && this.isActive) {
        let lineSegment = new RouteSegment(this.lastPoint, point);
        this.actualRoute.addSegment(lineSegment);
        let copyOfRoute = Object.assign({}, this.actualRoute);
        Object.setPrototypeOf(copyOfRoute, Route.prototype);
        this.actualRouteDataService.updateActualRoute(copyOfRoute);
      }
      this.lastPoint = point;
    });
  }

  public startRegister(): void {
    this.isActive = true;
  }
  public stopRegister(): void {
    this.isActive = false;
  }
}
