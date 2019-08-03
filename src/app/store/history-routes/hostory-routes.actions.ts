import { createAction, props } from "@ngrx/store";
import { Route } from "src/app/models/Route/route";

export const setRoutes = createAction(
  "[Routes] Set",
  props<{ routes: Route[] }>()
);
