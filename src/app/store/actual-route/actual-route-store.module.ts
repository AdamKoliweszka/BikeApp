import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { reducer } from "./actual-route.reducers";
import { actualRouteStoreKey } from "./index";

@NgModule({
  imports: [StoreModule.forFeature(actualRouteStoreKey, reducer)]
})
export class ActualRouteStateModule {}
