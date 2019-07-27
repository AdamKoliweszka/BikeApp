import { RouteSegment } from "../RouteSegment/route-segment";
import { FeatureCollection, Feature } from "geojson";
import { GeoJSONSource } from "mapbox-gl";

export class Route {
  segments: RouteSegment[];
  actualSpeed: number;
  distance: number;

  constructor() {
    this.segments = [];
    this.actualSpeed = 0;
    this.distance = 0;
  }
  public addSegment(segment: RouteSegment): void {
    this.actualSpeed = segment.speedInKmH;
    this.distance += segment.distanceInKm;
    this.segments.push(segment);
  }
  public getFullTime(): number {
    let time = 0;
    for (let segment of this.segments) {
      time += segment.timeInMiliseconds;
    }
    return time;
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
