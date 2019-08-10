import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RouteList } from "./route-list.page";
import { RouteListNew } from "./route-list-new/route-list-new.component";
import { MatButtonModule } from "@angular/material/button";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ListOfRoutes } from "./list-of-routes/list-of-routes.component";
import { RouteOptions } from "./route-options/route-options.component";
import { RouteInfoList } from "./route-list-info/route-list-info.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {
        path: "",
        component: RouteList
      },
      {
        path: "info/:id",
        component: RouteInfoList
      }
    ])
  ],
  declarations: [
    RouteList,
    RouteListNew,
    ListOfRoutes,
    RouteOptions,
    RouteInfoList
  ]
})
export class RouteListPageModule {}
