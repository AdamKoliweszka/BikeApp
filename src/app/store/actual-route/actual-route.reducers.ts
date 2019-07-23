import { createReducer, on, State, Action } from "@ngrx/store";
import { setRoute } from "./actual-route.actions";
import { Route } from "src/app/models/Route/route";
import * as ActualRouteActions from "./actual-route.actions";
import { RoutePoint } from "src/app/models/RoutePoint/route-point";

export interface ActualRouteState {
  actualRoute: Route;
  actualPosition: RoutePoint;
  isRegistering: boolean;
}
export const initialActualRouteState: ActualRouteState = {
  actualRoute: new Route(),
  actualPosition: new RoutePoint(
    50.86432551549099,
    17.470316290855408,
    new Date()
  ),
  isRegistering: false
};

export const actualRouteReducer = createReducer(
  initialActualRouteState,
  on(ActualRouteActions.setRoute, (state, { actualRoute }) => ({
    ...state,
    actualRoute
  })),
  on(ActualRouteActions.setActualPosition, (state, { actualPosition }) => {
    return {
      ...state,
      actualPosition
    };
  }),
  on(ActualRouteActions.setIsActiveRegistering, (state, { isRegistering }) => {
    return {
      ...state,
      isRegistering
    };
  })
);

export function reducer(state: ActualRouteState | undefined, action: Action) {
  return actualRouteReducer(state, action);
}
