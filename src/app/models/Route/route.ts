import { RouteSegment } from "../RouteSegment/route-segment";
import { FeatureCollection, Feature } from "geojson";
import { GeoJSONSource } from "mapbox-gl";

export class Route {
  segments: RouteSegment[];

  constructor() {
    this.segments = [];
  }
  public addSegment(segment: RouteSegment): void {
    this.segments.push(segment);
  }
  public getFullDistance(): number {
    let distance = 0;
    for (let segment of this.segments) {
      distance += segment.distanceInKm;
    }
    return distance;
  }
  public getFullTime(): number {
    let time = 0;
    for (let segment of this.segments) {
      time += segment.timeInMiliseconds;
    }
    return time;
  }
  public getActualSpeed(): number {
    return this.segments[this.segments.length - 1].speedInKmH;
  }
  public getSegments = () => {
    return this.segments;
  };
  public getFeatureCollection(): FeatureCollection {
    let f: Array<Feature> = new Array<Feature>();
    for (let segment of this.segments) {
      f.push(segment.getFeature());
    }
    let collection = {
      features: f,
      type: "FeatureCollection"
    } as FeatureCollection;
    return collection;
  }
}
