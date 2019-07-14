import { createAction, props } from "@ngrx/store";
import { Route } from "src/app/models/Route/route";
import { RoutePoint } from "src/app/models/RoutePoint/route-point";

export const setRoute = createAction(
  "[Route] Set",
  props<{ actualRoute: Route }>()
);

export const setActualPosition = createAction(
  "[Position] Set",
  props<{ actualPosition: RoutePoint }>()
);
