import { PointOnMap } from './point-on-map';
import { LineOnMap } from './line-on-map';
import { MarkerIcon } from './marker-icon';
import { StandardMarkerIcon } from './standard-marker-icon';
import { BikeMarkerIcon } from './bike-marker-icon';

declare let L;

export class MapInstance {

    private map;
    private markerLayer;
    private lineLayer;
    private icon;

    constructor(nameOfDiv: string, startPoint: PointOnMap) {
        this.map = L.map(nameOfDiv).setView([startPoint.getLatitude(), startPoint.getLongtitude()], 18);
        this.setIcon( new BikeMarkerIcon() );
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        this.markerLayer = L.layerGroup().addTo(this.map);
        this.lineLayer = L.layerGroup().addTo(this.map);
        this.map.invalidateSize();
        this.addMarker(startPoint);
    }
    
    addMarker(point: PointOnMap): void {
        L.marker([point.getLatitude(), point.getLongtitude()]).addTo(this.markerLayer);
    }
    clearMarkers(): void {
        this.markerLayer.clearLayers();
    }
    setFocusPoint(point: PointOnMap) : void {
        this.map.panTo(new L.LatLng(point.getLatitude(), point.getLongtitude()));
    }
    invalidateSize() : void
    {
        this.map.invalidateSize();
    }
    clearLines(): void {
        this.lineLayer.clearLayers();
    }
    addLine(line: LineOnMap) {
        
        let points = line.getPointsInLatLngFormat();
        let polyline = new L.Polyline(points,{
            color: line.getColor()
        }).addTo(this.lineLayer);
        
    }
    setIcon(icon : MarkerIcon)
    {
        this.icon = L.icon(icon);
        L.Marker.prototype.options.icon = this.icon;
    }
    
}
