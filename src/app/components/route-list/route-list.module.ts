import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RouteList } from "./route-list.page";
import { ActualRouteOptionsComponent } from "./route-list-new/route-list-new.component";
import { MatButtonModule } from "@angular/material/button";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
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
      }
    ])
  ],
  declarations: [RouteList, ActualRouteOptionsComponent]
})
export class RouteListPageModule {}
