import { LineOnMap } from './line-on-map';
import { RoutePoint } from './route-point';

declare let L;

export class LineSegment implements LineOnMap {
    private startPoint: RoutePoint;
    private endPoint: RoutePoint;
    private color: string;
    constructor(startPoint : RoutePoint, endPoint : RoutePoint)
    {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = "red";
    }
    public getColor = () => { return this.color; };
    public getPointsInLatLngFormat(): any[] {
        let points = [];
        points.push(new L.LatLng(this.startPoint.getLatitude(), this.startPoint.getLongtitude()));
        points.push(new L.LatLng(this.endPoint.getLatitude(), this.endPoint.getLongtitude()));
        return points;
    }
    public getDistanceInKm() : number {
        var R = 6371; 
        var dLat = this.deg2rad(this.endPoint.getLatitude() - this.startPoint.getLatitude());  
        var dLon = this.deg2rad(this.endPoint.getLongtitude() - this.startPoint.getLongtitude());
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(this.startPoint.getLatitude())) * Math.cos(this.deg2rad(this.endPoint.getLatitude())) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c; 
        let absoluteDistance = Math.abs(d);
        return absoluteDistance;
    }
    public getSpeedOnSegment() : number {
        let timeInMiliseconds = this.getTimeOfSegmentInMiliseconds();
        let timeInSeconds = timeInMiliseconds / 1000;
        let timeInMinutes = timeInSeconds / 60;
        let timeInHours = timeInMinutes / 60;
        let distanceInKm = this.getDistanceInKm();
        let speed = distanceInKm / timeInHours;
        return speed;
    }
    public getTimeOfSegmentInMiliseconds() : number {
        return this.startPoint.getAbsoluteDifferenceInMiliseconds(this.endPoint);
    }

    private deg2rad(deg): number {
        return deg * (Math.PI / 180)
    }

}
