import { Injectable, ApplicationInitStatus } from "@angular/core";
import { RoutePoint } from "../../models/RoutePoint/route-point";
import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";
import { Observable, Subject, timer, interval } from "rxjs";
import { GeoLocationOptions } from "./geo-location-options";
import { ActualRouteDataService } from "../store/actual-route-data.service";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  private watchLocation: Observable<Geoposition>;

  constructor(
    private geoLocation: Geolocation,
    private actualRouteDataService: ActualRouteDataService
  ) {
    let options = new GeoLocationOptions();
    options.enableHighAccuracy = true;
    this.watchLocation = this.geoLocation.watchPosition(options);
    interval(500).subscribe(i => {
      this.geoLocation.getCurrentPosition().then(data => {
        let actualDate = new Date();
        let locationPoint = new RoutePoint(
          data.coords.latitude,
          data.coords.longitude,
          actualDate
        );
        this.actualRouteDataService.updateActualPosition(locationPoint);
      });
    });
    /*
    this.watchLocation.subscribe(data => {
      console.log("test");
      let actualDate = new Date();
      let locationPoint = new RoutePoint(
        data.coords.latitude,
        data.coords.longitude,
        actualDate
      );
      this.actualRouteDataService.updateActualPosition(locationPoint);
    });
    */
  }
}
