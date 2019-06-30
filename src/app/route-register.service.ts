import { Injectable } from '@angular/core';
import { Route } from './route';
import { LocationService } from './location.service';
import { Subscription, Subject, Observable } from 'rxjs';
import { RoutePoint } from './route-point';
import { LineSegment } from './line-segment';

@Injectable({
  providedIn: 'root'
})
export class RouteRegisterService {

  private actualRoute: Route;
  private locationSubscription: Subscription;
  private lastPoint: RoutePoint;
  private subject: Subject<Route>;
  private isActive: boolean;
  constructor(private locationService: LocationService) {
    this.isActive = false;
    this.actualRoute = new Route();
    this.subject = new Subject<Route>();
    this.locationSubscription = this.locationService.watchPosition().subscribe(data => {
      let point = data;
      if (this.lastPoint && this.isActive) {
        let lineSegment = new LineSegment(this.lastPoint, point);
        this.actualRoute.addSegment(lineSegment);
        this.subject.next(this.actualRoute);
      }
      this.lastPoint = point;
    });
  }
  public watchRoute(): Observable<Route> {
    return this.subject.asObservable();
  }

  public startRegister(): void {
    this.isActive = true;
  }
  public stopRegister(): void {
    this.isActive = false;
  }

}
