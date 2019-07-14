import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ActualRouteState } from "./actual-route.reducers";
import { actualRouteStoreKey } from "./index";

export const actualRouteFeatureSelector = createFeatureSelector(
  actualRouteStoreKey
);

export const selectActualSpeed = createSelector(
  actualRouteFeatureSelector,
  (state: ActualRouteState) => state.actualRoute.actualSpeed
);

export const selectDistance = createSelector(
  actualRouteFeatureSelector,
  (state: ActualRouteState) => state.actualRoute.distance
);
