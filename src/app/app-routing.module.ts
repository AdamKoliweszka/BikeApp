import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "route", pathMatch: "full" },
  {
    path: "actual",
    loadChildren:
      "./components/actual-route/actual-route.module#ActualRoutePageModule"
  },
  {
    path: "route",
    loadChildren:
      "./components/route-list/route-list.module#RouteListPageModule"
  },
  {
    path: "historic-routes",
    loadChildren:
      "./components/actual-route/actual-route.module#ActualRoutePageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
