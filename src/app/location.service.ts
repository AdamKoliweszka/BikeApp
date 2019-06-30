import { Injectable } from '@angular/core';
import { RoutePoint } from './route-point';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Observable, Subject } from 'rxjs';
import { GeolocationOptions } from './geolocation-options';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private watchLocation: Observable<Geoposition>;
  private watchRoutePoint: Observable<RoutePoint>;
  private locationSubject: Subject<RoutePoint>;

  constructor(private geoLocation: Geolocation
  ) {

    this.locationSubject = new Subject<RoutePoint>();
    let options = new GeolocationOptions();
    options.enableHighAccuracy = true;
    this.watchLocation = this.geoLocation.watchPosition(options);
    this.watchLocation.subscribe((data) => {
      let actualDate = new Date();
      let locationPoint = new RoutePoint(data.coords.latitude, data.coords.longitude, actualDate);
      this.locationSubject.next(locationPoint);
    });

  }

  watchPosition(): Observable<RoutePoint> {
    return this.locationSubject.asObservable();
  }


}
