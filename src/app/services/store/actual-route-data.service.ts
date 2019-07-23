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
  selectIsRegistering
} from "src/app/store/actual-route/actual-route.selectors";
import {
  setRoute,
  setActualPosition,
  setIsActiveRegistering
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
  private actualStateOfRegistering$ = this.store.select(selectIsRegistering);

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
    return this.actualStateOfRegistering$;
  }

  updateActualRoute(actualRoute: Route) {
    this.store.dispatch(setRoute({ actualRoute }));
  }

  updateActualPosition(actualPosition: RoutePoint) {
    this.store.dispatch(setActualPosition({ actualPosition }));
  }

  updateIsRegistering(isRegistering: boolean) {
    this.store.dispatch(setIsActiveRegistering({ isRegistering }));
  }
}
