import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ActualRouteState } from "./actual-route.reducers";
import { actualRouteStoreKey } from "./index";

export const actualRouteFeatureSelector = createFeatureSelector(
  actualRouteStoreKey
);

export const selectActualPostion = createSelector(
  actualRouteFeatureSelector,
  (state: ActualRouteState) => state.actualPosition
);

export const selectDistance = createSelector(
  actualRouteFeatureSelector,
  (state: ActualRouteState) => state.actualRoute.distance
);

export const selectActualSpeed = createSelector(
  actualRouteFeatureSelector,
  (state: ActualRouteState) => state.actualRoute.actualSpeed
);

export const selectActualRoute = createSelector(
  actualRouteFeatureSelector,
  (state: ActualRouteState) => state.actualRoute
);

export const selectIsRegistering = createSelector(
  actualRouteFeatureSelector,
  (state: ActualRouteState) => state.isRegistering
);

export const selectIsPause = createSelector(
  actualRouteFeatureSelector,
  (state: ActualRouteState) => state.isPause
);
