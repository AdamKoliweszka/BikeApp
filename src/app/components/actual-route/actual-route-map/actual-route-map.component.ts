import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../../../map/MapInstance/map-instance";
import { RoutePoint } from "../../../models/RoutePoint/route-point";
import { LocationService } from "../../../services/location/location.service";
import { RouteRegisterService } from "../../../services/RouteRegister/route-register.service";
import { ActualRouteDataService } from "../../../services/store/actual-route-data.service";
import { Subscription, Observable } from "rxjs";
import { Route } from "../../../models/Route/route";

@Component({
  selector: "app-actual-route-map",
  templateUrl: "./actual-route-map.component.html",
  styleUrls: ["./actual-route-map.component.scss"]
})
export class ActualRouteMapComponent implements OnInit {
  isLoaded: boolean;
  map: MapInstance;
  actualPositionSubscription: Subscription;
  actualPosition$: Observable<
    RoutePoint
  > = this.actualRouteDataService.getPosition();
  actualRouteSubscription: Subscription;
  actualRoute$: Observable<Route> = this.actualRouteDataService.getRoute();
  constructor(private actualRouteDataService: ActualRouteDataService) {
    this.isLoaded = false;
  }

  ngOnInit() {
    this.actualPositionSubscription = this.actualPosition$.subscribe(data => {
      if (!this.isLoaded) {
        this.map = new MapInstance("map", data);
        this.map.loadMap();
        this.map.addMarker(data);
        this.map.setFocusPoint(data);
        this.isLoaded = true;
      } else {
        this.map.updatePositionOfMarker(data);
      }
    });
    this.actualRoute$.subscribe(data => {
      this.map.updateDataOfRouteLayer("tour", data);
    });
  }

  ngOnDestroy() {
    this.actualPositionSubscription.unsubscribe();
    this.actualRouteSubscription.unsubscribe();
  }
}
