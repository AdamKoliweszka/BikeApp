import { Injectable } from "@angular/core";
import { Route } from "../../models/Route/route";
import { LocationService } from "../location/location.service";
import { Subscription, Subject, Observable } from "rxjs";
import { RoutePoint } from "../../models/RoutePoint/route-point";
import { RouteSegment } from "src/app/models/RouteSegment/route-segment";

@Injectable({
  providedIn: "root"
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
    this.locationSubscription = this.locationService
      .watchPosition()
      .subscribe(data => {
        let point = data;
        if (this.lastPoint && this.isActive) {
          let lineSegment = new RouteSegment(this.lastPoint, point);
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
