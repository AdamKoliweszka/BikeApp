import { Injectable } from "@angular/core";
import { Route } from "../../models/Route/route";
import { LocationService } from "../location/location.service";
import {
  Subscription,
  Subject,
  Observable,
  forkJoin,
  combineLatest
} from "rxjs";
import { RoutePoint } from "../../models/RoutePoint/route-point";
import { RouteSegment } from "src/app/models/RouteSegment/route-segment";
import { ActualRouteDataService } from "../store/actual-route-data.service";
import { take, combineAll } from "rxjs/operators";
import { HistoryRoutesDataService } from "../store/history-routes-data.service";
import { HistoryRoutesFileService } from "../storage/history-routes-file.service";
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
  private isPause$: Observable<
    boolean
  > = this.actualRouteDataService.getIsPause();
  private lastPoint: RoutePoint;
  actualPosition$: Observable<
    RoutePoint
  > = this.actualRouteDataService.getPosition();
  constructor(
    private actualRouteDataService: ActualRouteDataService,
    private historyRoutesDataService: HistoryRoutesDataService
  ) {
    combineLatest(
      this.isRegistering$,
      this.actualPosition$,
      this.isPause$
    ).subscribe(result => {
      if (result[0] && !result[2]) {
        //console.log("jest");
        this.actualRoute$
          .pipe(take(1))
          .toPromise()
          .then(actualRoute => {
            if (this.lastPoint) {
              let lineSegment = new RouteSegment(this.lastPoint, result[1]);
              let copyOfRoute = Object.assign({}, actualRoute);
              Object.setPrototypeOf(copyOfRoute, Route.prototype);
              copyOfRoute.addSegment(lineSegment);
              console.log(copyOfRoute);
              this.actualRouteDataService.updateActualRoute(copyOfRoute);
            }
            this.lastPoint = result[1];
          });
      }
    });
  }

  public startRegister() {
    this.actualRouteDataService.updateIsRegistering(true);
  }

  public resumeRegister() {
    this.actualRouteDataService.updateIsPause(false);
  }

  public pauseRegister() {
    this.actualRouteDataService.updateIsPause(true);
  }
  public stopRegister() {
    this.actualRouteDataService.updateIsPause(true);
    this.actualRouteDataService.updateIsRegistering(false);
    this.actualRoute$
      .pipe(take(1))
      .toPromise()
      .then(actualRoute => {
        this.historyRoutesDataService.addRoute(actualRoute);
        let route = new Route();
        this.actualRouteDataService.updateActualRoute(route);
      });
  }
}
