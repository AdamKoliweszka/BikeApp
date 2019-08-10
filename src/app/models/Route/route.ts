import { RouteSegment } from "../RouteSegment/route-segment";
import { FeatureCollection, Feature } from "geojson";
import { GeoJSONSource } from "mapbox-gl";

export class Route {
  segments: RouteSegment[];
  actualSpeed: number;
  distance: number;
  maxSpeed: number;
  fullTime: number;

  constructor() {
    this.segments = [];
    this.actualSpeed = 0;
    this.distance = 0;
    this.maxSpeed = 0;
    this.fullTime = 0;
  }
  public addSegment(segment: RouteSegment): void {
    this.fullTime += segment.timeInMiliseconds;
    this.actualSpeed = segment.speedInKmH;
    this.distance += segment.distanceInKm;
    if (this.maxSpeed < segment.speedInKmH) this.maxSpeed = segment.speedInKmH;
    this.segments.push(segment);
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
