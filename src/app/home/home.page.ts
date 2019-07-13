import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { MapInstance } from "../map/MapInstance/map-instance";
import { LocationService } from "../services/location/location.service";
import { Subscription } from "rxjs";
import { RoutePoint } from "../models/RoutePoint/route-point";
import { RouteRegisterService } from "../services/RouteRegister/route-register.service";
import { RouteLayer } from "../map/Layers/RouteLayer/route-layer";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  map: MapInstance;
  locationSubscription: Subscription;
  routeSubscription: Subscription;
  actualSpeed: number;
  distance: number;
  constructor(
    private locationService: LocationService,
    private routeRegisterService: RouteRegisterService
  ) {}

  ngOnInit() {
    let actualDate = new Date();
    let startPoint = new RoutePoint(
      50.86432551549099,
      17.470316290855408,
      actualDate
    );

    this.map = new MapInstance("map", startPoint);

    this.map.loadMap();
    this.actualSpeed = 0;
    this.distance = 0;
    this.map.addMarker(startPoint);

    this.locationSubscription = this.locationService
      .watchPosition()
      .subscribe(data => {
        let point = data;
        this.map.setFocusPoint(point);
        this.map.updatePositionOfMarker(point);
      });

    this.routeSubscription = this.routeRegisterService
      .watchRoute()
      .subscribe(data => {
        let route = data;
        this.map.updateDataOfRouteLayer("tour", route);
        this.actualSpeed = route.getActualSpeed();
        this.distance = route.getFullDistance();
      });
  }

  ngOnDestroy() {
    this.locationSubscription.unsubscribe();
  }

  start(): void {
    this.routeRegisterService.startRegister();
  }

  stop(): void {
    this.routeRegisterService.stopRegister();
    this.actualSpeed = 0;
  }
}
