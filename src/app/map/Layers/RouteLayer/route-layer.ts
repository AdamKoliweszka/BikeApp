import { Layer, LineLayout, LinePaint, GeoJSONSourceRaw } from "mapbox-gl";

export class RouteLayer implements Layer {
  id: string;
  type: "line";
  source: GeoJSONSourceRaw;
  layout: LineLayout;
  paint: LinePaint;

  constructor(id: string) {
    this.id = id;
    this.type = "line";
    this.layout = {
      "line-join": "round",
      "line-cap": "round"
    };
    this.paint = {
      "line-color": ["get", "color"],
      "line-width": 3
    };
    this.source = {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [[1, 0], [0, 0]]
            }
          }
        ]
      }
    };
  }
}
