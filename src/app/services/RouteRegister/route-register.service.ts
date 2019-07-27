import { Injectable } from "@angular/core";
import { Route } from "../../models/Route/route";
import { LocationService } from "../location/location.service";
import { Subscription, Subject, Observable } from "rxjs";
import { RoutePoint } from "../../models/RoutePoint/route-point";
import { RouteSegment } from "src/app/models/RouteSegment/route-segment";
import { ActualRouteDataService } from "../store/actual-route-data.service";
import { take } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class RouteRegisterService {
  private actualRoute$: Observable<
    Route
  > = this.actualRouteDataService.getRoute();
  private isRegistering$: Observable<
    boolean
  > = this.actualRouteDataService.getIsRegistering();
  private lastPoint: RoutePoint;
  actualPosition$: Observable<
    RoutePoint
  > = this.actualRouteDataService.getPosition();
  constructor(private actualRouteDataService: ActualRouteDataService) {
    this.actualPosition$.subscribe(data => {
      let point = data;
      if (this.lastPoint) {
        let lineSegment = new RouteSegment(this.lastPoint, point);
        this.actualRoute$.pipe(take(1)).subscribe(value => {
          this.isRegistering$.pipe(take(1)).subscribe(v => {
            if (v) {
              value.addSegment(lineSegment);
              let copyOfRoute = Object.assign({}, value);
              Object.setPrototypeOf(copyOfRoute, Route.prototype);
              this.actualRouteDataService.updateActualRoute(copyOfRoute);
            }
          });
        });
      }
      this.lastPoint = point;
    });
  }
}
