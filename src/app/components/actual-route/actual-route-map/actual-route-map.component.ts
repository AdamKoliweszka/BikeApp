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
  map: MapInstance;
  actualPosition$: Observable<
    RoutePoint
  > = this.actualRouteDataService.getPosition();
  actualRoute$: Observable<Route> = this.actualRouteDataService.getRoute();
  constructor(private actualRouteDataService: ActualRouteDataService) {}

  ngOnInit() {
    let startPoint = new RoutePoint(
      50.86432551549099,
      17.470316290855408,
      new Date()
    );

    this.map = new MapInstance("map", startPoint);

    this.map.loadMap();
    this.map.addMarker(startPoint);

    this.actualPosition$.subscribe(data => {
      this.map.setFocusPoint(data);
      this.map.updatePositionOfMarker(data);
    });
    this.actualRoute$.subscribe(data => {
      this.map.updateDataOfRouteLayer("tour", data);
    });
  }

  ngOnDestroy() {}
}
