import { Injectable, ApplicationInitStatus } from "@angular/core";
import { RoutePoint } from "../../models/RoutePoint/route-point";
import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";
import { Observable, Subject } from "rxjs";
import { GeoLocationOptions } from "./geo-location-options";
import { ActualRouteDataService } from "../store/actual-route-data.service";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  private watchLocation: Observable<Geoposition>;
  //private watchRoutePoint: Observable<RoutePoint>;
  //private locationSubject: Subject<RoutePoint>;

  constructor(
    private geoLocation: Geolocation,
    private actualRouteDataService: ActualRouteDataService
  ) {
    //this.locationSubject = new Subject<RoutePoint>();
    let options = new GeoLocationOptions();
    options.enableHighAccuracy = true;
    this.watchLocation = this.geoLocation.watchPosition(options);
    this.watchLocation.subscribe(data => {
      let actualDate = new Date();
      let locationPoint = new RoutePoint(
        data.coords.latitude,
        data.coords.longitude,
        actualDate
      );
      this.actualRouteDataService.updateActualPosition(locationPoint);
      //this.locationSubject.next(locationPoint);
    });
  }

  /*
  watchPosition(): Observable<RoutePoint> {
    return this.locationSubject.asObservable();
  }
  */
}
