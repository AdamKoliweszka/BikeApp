import { createReducer, on, Action } from "@ngrx/store";
import { Route } from "src/app/models/Route/route";
import * as ActualRouteActions from "./hostory-routes.actions";
import { RoutePoint } from "src/app/models/RoutePoint/route-point";

export interface HistoryRoutesState {
  routes: Route[];
}
export const initialHistoryRouteState: HistoryRoutesState = {
  routes: []
};

export const historyRoutesReducer = createReducer(
  initialHistoryRouteState,
  on(ActualRouteActions.setRoutes, (state, { routes }) => ({
    ...state,
    routes
  }))
);

export function reducer(state: HistoryRoutesState | undefined, action: Action) {
  return historyRoutesReducer(state, action);
}
