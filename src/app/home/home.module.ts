import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomePage } from "./home.page";
import { ActualRouteMapComponent } from "../actual-route-map/actual-route-map.component";
import { ActualRouteInfoComponent } from "../actual-route-info/actual-route-info.component";
import { ActualRouteOptionsComponent } from "../actual-route-options/actual-route-options.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    ActualRouteMapComponent,
    ActualRouteInfoComponent,
    ActualRouteOptionsComponent
  ]
})
export class HomePageModule {}
