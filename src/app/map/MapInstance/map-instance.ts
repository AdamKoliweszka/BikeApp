import { BikeMarkerIcon } from "../BikeIcon/bike-marker-icon";
import * as mapboxgl from "mapbox-gl";
import { environment } from "../../../environments/environment";
import { RouteLayer } from "../Layers/RouteLayer/route-layer";
import { Route } from "src/app/models/Route/route";

export class MapInstance {
  private marker: mapboxgl.Marker;
  private nameOfDiv: string;
  private startPoint: mapboxgl.LngLat;
  private map: mapboxgl.Map;
  private isLoaded: boolean;

  constructor(nameOfDiv: string, startPoint: mapboxgl.LngLat) {
    this.isLoaded = false;
    this.nameOfDiv = nameOfDiv;
    this.startPoint = startPoint;
  }

  addMarker(point: mapboxgl.LngLat): void {
    let icon = new BikeMarkerIcon();
    this.marker = new mapboxgl.Marker(icon).setLngLat(point).addTo(this.map);
  }
  updatePositionOfMarker(point: mapboxgl.LngLat) {
    if (this.marker) {
      this.marker.setLngLat(point);
    }
  }
  clearMarker(): void {
    this.marker.remove();
  }
  setFocusPoint(point: mapboxgl.LngLat): void {
    this.map.setCenter(point);
  }
  loadMap(): void {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;

    this.map = new mapboxgl.Map({
      container: this.nameOfDiv, // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: this.startPoint, // starting position [lng, lat]
      zoom: 18, // starting zoom
      trackResize: true
    });

    this.map.on("load", () => {
      this.map.resize();
      this.isLoaded = true;
      this.addRouteLayer("tour");
    });
  }

  addRouteLayer(id: string) {
    let layer: RouteLayer = new RouteLayer(id);
    this.map.addLayer(layer);
  }
  isLayerOnMap(id: string) {
    let layer = this.map.getLayer(id);
    if (layer) return true;
    else return false;
  }
  updateDataOfRouteLayer(id: string, route: Route) {
    let data = this.map.getSource(id) as mapboxgl.GeoJSONSource;
    if (data) {
      data.setData(route.getFeatureCollection());
    }
  }
}
