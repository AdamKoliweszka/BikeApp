import { createAction, props } from "@ngrx/store";
import { Route } from "src/app/models/Route/route";

export const setRoute = createAction(
  "[Route] Set",
  props<{ actualRoute: Route }>()
);

export const setActualSpeed = createAction(
  "[Speed] Set",
  props<{ actualSpeed: number }>()
);
