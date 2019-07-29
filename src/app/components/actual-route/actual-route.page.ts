import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../../map/MapInstance/map-instance";
import { Subscription, Observable } from "rxjs";
import { RouteRegisterService } from "../../services/RouteRegister/route-register.service";
import { ActualRouteDataService } from "../../services/store/actual-route-data.service";
import { ActualRouteMapComponent } from "./actual-route-map/actual-route-map.component";

@Component({
  selector: "app-actual-route",
  templateUrl: "actual-route.page.html",
  styleUrls: ["actual-route.page.scss"]
})
export class ActualRoute implements OnInit {
  map: MapInstance;
  actualSpeed$: Observable<number> = this.actualRouteDataService.getSpeed();
  distance$: Observable<number> = this.actualRouteDataService.getDistance();
  isRegistering$: Observable<
    boolean
  > = this.actualRouteDataService.getIsRegistering();

  isPause$: Observable<boolean> = this.actualRouteDataService.getIsPause();

  constructor(private actualRouteDataService: ActualRouteDataService) {}

  ngOnInit() {}
}
