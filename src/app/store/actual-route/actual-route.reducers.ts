import { createReducer, on, State, Action } from "@ngrx/store";
import { setRoute } from "./actual-route.actions";
import { Route } from "src/app/models/Route/route";
import * as ActualRouteActions from "./actual-route.actions";

export interface ActualRouteState {
  actualRoute: Route;
  actualSpeed: number;
}
export const initialActualRouteState: ActualRouteState = {
  actualRoute: new Route(),
  actualSpeed: 0
};

export const actualRouteReducer = createReducer(
  initialActualRouteState,
  on(ActualRouteActions.setRoute, (state, { actualRoute }) => ({
    ...state,
    actualRoute
  })),
  on(ActualRouteActions.setActualSpeed, (state, { actualSpeed }) => {
    console.log(actualSpeed);
    return {
      ...state,
      actualSpeed
    };
  })
);

export function reducer(state: ActualRouteState | undefined, action: Action) {
  return actualRouteReducer(state, action);
}
