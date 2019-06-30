import { Component, OnInit, OnDestroy } from '@angular/core';
import { PointOnMap } from '../point-on-map';
import { MapInstance } from '../map-instance';
import { LineOnMap } from '../line-on-map';
import { LocationService } from '../location.service';
import { Subscription } from 'rxjs';
import { RoutePoint } from '../route-point';
import { RouteRegisterService } from '../route-register.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  map: MapInstance;
  locationSubscription: Subscription;
  routeSubscription: Subscription;
  actualSpeed: number;
  distance: number;
  constructor(private locationService: LocationService,
    private routeRegisterService: RouteRegisterService
  ) {

  }

  ngOnInit() {
    let actualDate = new Date();
    let startPoint = new RoutePoint(50.86432551549099, 17.470316290855408, actualDate);

    this.map = new MapInstance('map', startPoint);
    this.map.invalidateSize();
    this.actualSpeed = 0;
    this.distance = 0;
    
    this.locationSubscription = this.locationService.watchPosition().subscribe(data => {
      let point = data;
      this.map.clearMarkers();
      this.map.setFocusPoint(point);
      this.map.addMarker(point);
      this.map.invalidateSize();
    });

    this.routeSubscription = this.routeRegisterService.watchRoute().subscribe(data => {
      let route = data;
      this.map.clearLines();
      let lineSegmentes = route.getLineSegmentes();
      for (let line of lineSegmentes) {
        this.map.addLine(line);
      }
      this.actualSpeed = route.getActualSpeed();
      this.distance = route.getFullDistance();
    });


  }

  ngOnDestroy() {
    this.locationSubscription.unsubscribe();
  }

  start() : void{
    this.routeRegisterService.startRegister();
  }

  stop() : void{
    this.routeRegisterService.stopRegister();
    this.actualSpeed = 0;
  }

}
