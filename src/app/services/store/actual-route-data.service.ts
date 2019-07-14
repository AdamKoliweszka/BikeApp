import { Injectable } from "@angular/core";
import { Route } from "../../models/Route/route";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { ActualRouteState } from "src/app/store/actual-route/actual-route.reducers";
import {
  selectActualSpeed,
  selectDistance
} from "src/app/store/actual-route/actual-route.selectors";
import {
  setRoute,
  setActualSpeed
} from "src/app/store/actual-route/actual-route.actions";

@Injectable({
  providedIn: "root"
})
export class ActualRouteDataService {
  private actualSpeed$ = this.store.select(selectActualSpeed);
  private actualDistance$ = this.store.select(selectDistance);
  constructor(private store: Store<ActualRouteState>) {}

  getSpeed(): Observable<number> {
    return this.actualSpeed$;
  }

  getDistance(): Observable<number> {
    return this.actualDistance$;
  }

  updateActualRoute(actualRoute: Route) {
    this.store.dispatch(setRoute({ actualRoute }));
  }

  updateActualSpeed(actualSpeed: number) {
    console.log("update " + actualSpeed);
    this.store.dispatch(setActualSpeed({ actualSpeed }));
  }
}
