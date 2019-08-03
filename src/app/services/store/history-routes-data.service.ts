import { Injectable } from "@angular/core";
import { Route } from "../../models/Route/route";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { HistoryRoutesState } from "src/app/store/history-routes/history-routes.reducers";
import { selectHistoryRoutes } from "src/app/store/history-routes/hostory-routes.selectors";
import { setRoutes } from "src/app/store/history-routes/hostory-routes.actions";

@Injectable({
  providedIn: "root"
})
export class HistoryRoutesDataService {
  private historyRoutes$ = this.store.select(selectHistoryRoutes);

  constructor(private store: Store<HistoryRoutesState>) {}

  getRoutes(): Observable<Route[]> {
    return this.historyRoutes$;
  }
  updateRoutes(routes: Route[]) {
    this.store.dispatch(setRoutes({ routes }));
  }
}
