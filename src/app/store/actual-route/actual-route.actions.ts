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

export const setIsRegistering = createAction(
  "[Registering] Set",
  props<{ isRegistering: boolean }>()
);

export const setIsPause = createAction(
  "[Pause] Set",
  props<{ isPause: boolean }>()
);
