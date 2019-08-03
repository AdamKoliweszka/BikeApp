import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HistoryRoutesState } from "./history-routes.reducers";
import { historyRoutesStoreKey } from "./index";

export const historyRoutesFeatureSelector = createFeatureSelector(
  historyRoutesStoreKey
);

export const selectHistoryRoutes = createSelector(
  historyRoutesFeatureSelector,
  (state: HistoryRoutesState) => state.routes
);
