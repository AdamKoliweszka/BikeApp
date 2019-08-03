import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { reducer } from "./history-routes.reducers";
import { historyRoutesStoreKey } from "./index";

@NgModule({
  imports: [StoreModule.forFeature(historyRoutesStoreKey, reducer)]
})
export class HistoryRoutesStateModul {}
