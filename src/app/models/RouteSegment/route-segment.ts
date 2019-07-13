import { RoutePoint } from "../RoutePoint/route-point";
import { Feature } from "geojson";

export class RouteSegment {
  type: "LineString";
  startPoint: RoutePoint;
  endPoint: RoutePoint;
  distanceInKm: number;
  speedInKmH: number;
  timeInMiliseconds: number;
  color: string;
  constructor(startPoint: RoutePoint, endPoint: RoutePoint) {
    this.type = "LineString";
    this.setDistanceInKm(startPoint, endPoint);
    this.setTimeOfSegmentInMiliseconds(startPoint, endPoint);
    this.setSpeedOnSegment();
    this.color = "#F7455D";
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    //
  }
  public getFeature(): Feature {
    return {
      type: "Feature",
      properties: {
        color: this.color
      },
      geometry: {
        type: "LineString",
        coordinates: [this.startPoint.toArray(), this.endPoint.toArray()]
      }
    };
  }
  private setDistanceInKm(startPoint: RoutePoint, endPoint: RoutePoint) {
    var R = 6371;
    var dLat = this.deg2rad(endPoint.lat - startPoint.lat);
    var dLon = this.deg2rad(endPoint.lng - startPoint.lng);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(startPoint.lat)) *
        Math.cos(this.deg2rad(endPoint.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    this.distanceInKm = Math.abs(d);
  }
  private deg2rad(deg): number {
    return deg * (Math.PI / 180);
  }
  private setSpeedOnSegment() {
    let timeInMiliseconds = this.timeInMiliseconds;
    let timeInSeconds = timeInMiliseconds / 1000;
    let timeInMinutes = timeInSeconds / 60;
    let timeInHours = timeInMinutes / 60;
    this.speedInKmH = this.distanceInKm / timeInHours;
  }
  private setTimeOfSegmentInMiliseconds(
    startPoint: RoutePoint,
    endPoint: RoutePoint
  ) {
    this.timeInMiliseconds = startPoint.getAbsoluteDifferenceInMiliseconds(
      endPoint
    );
  }
}
