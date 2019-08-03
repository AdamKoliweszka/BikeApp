import { Injectable } from "@angular/core";
import { Route } from "../../models/Route/route";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { ActualRouteState } from "src/app/store/actual-route/actual-route.reducers";
import {
  selectActualPostion,
  selectActualSpeed,
  selectDistance,
  selectActualRoute,
  selectIsRegistering,
  selectIsPause
} from "src/app/store/actual-route/actual-route.selectors";
import {
  setRoute,
  setActualPosition,
  setIsPause,
  setIsRegistering
} from "src/app/store/actual-route/actual-route.actions";
import { RoutePoint } from "src/app/models/RoutePoint/route-point";

@Injectable({
  providedIn: "root"
})
export class ActualRouteDataService {
  private actualPosition$ = this.store.select(selectActualPostion);
  private actualSpeed$ = this.store.select(selectActualSpeed);
  private actualDistance$ = this.store.select(selectDistance);
  private actualRoute$ = this.store.select(selectActualRoute);
  private isRegistering$ = this.store.select(selectIsRegistering);
  private isPause$ = this.store.select(selectIsPause);

  constructor(private store: Store<ActualRouteState>) {}

  getPosition(): Observable<RoutePoint> {
    return this.actualPosition$;
  }
  getSpeed(): Observable<number> {
    return this.actualSpeed$;
  }

  getDistance(): Observable<number> {
    return this.actualDistance$;
  }

  getRoute(): Observable<Route> {
    return this.actualRoute$;
  }

  getIsRegistering(): Observable<boolean> {
    return this.isRegistering$;
  }

  getIsPause(): Observable<boolean> {
    return this.isPause$;
  }

  updateActualRoute(actualRoute: Route) {
    this.store.dispatch(setRoute({ actualRoute }));
  }

  updateActualPosition(actualPosition: RoutePoint) {
    this.store.dispatch(setActualPosition({ actualPosition }));
  }

  updateIsRegistering(isRegistering: boolean) {
    this.store.dispatch(setIsRegistering({ isRegistering }));
  }

  updateIsPause(isPause: boolean) {
    this.store.dispatch(setIsPause({ isPause }));
  }

  stopRegister() {
    let actualRoute = new Route();
    let isPause = false;
    let isRegistering = false;
    let actualPosition = new RoutePoint(
      50.86432551549099,
      17.470316290855408,
      new Date()
    );
    this.store.dispatch(setRoute({ actualRoute }));
    this.store.dispatch(setIsPause({ isPause }));
    this.store.dispatch(setIsRegistering({ isRegistering }));
    this.store.dispatch(setActualPosition({ actualPosition }));
  }
}
