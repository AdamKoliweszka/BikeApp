import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../map/MapInstance/map-instance";
import { Subscription, Observable } from "rxjs";
import { RouteRegisterService } from "../services/RouteRegister/route-register.service";
import { ActualRouteDataService } from "../services/store/actual-route-data.service";
import { ActualRouteMapComponent } from "../components/actual-route/actual-route-map/actual-route-map.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  map: MapInstance;
  actualSpeed$: Observable<number> = this.actualRouteDataService.getSpeed();
  distance$: Observable<number> = this.actualRouteDataService.getDistance();
  isRegistering$: Observable<
    boolean
  > = this.actualRouteDataService.getIsRegistering();

  constructor(private actualRouteDataService: ActualRouteDataService) {}

  ngOnInit() {}
}
