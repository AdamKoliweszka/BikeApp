
import { PointOnMap } from './point-on-map';
import { TimeValue } from './time-value';
declare let L;
export class RoutePoint implements PointOnMap, TimeValue {

    private latitude: number;
    private longtitude: number;
    private dateOfMessuring: Date;

    constructor(latitude: number, longtitude: number, date: Date) {
        this.latitude = latitude;
        this.longtitude = longtitude;
        this.dateOfMessuring = date;
    }

    public getLatitude = () => { return this.latitude; }
    public getLongtitude = () => { return this.longtitude; }
    public getHoursPart = () => { return this.dateOfMessuring.getHours(); }
    public getMinutesPart = () => { return this.dateOfMessuring.getMinutes(); }
    public getSecondsPart = () => { return this.dateOfMessuring.getSeconds(); }
    public getAbsoluteDifferenceInMiliseconds(otherTimeValue: TimeValue)
    {
        let difference = this.getTimeInMilisenods() - otherTimeValue.getTimeInMilisenods();
        let absoluteDifference = Math.abs(difference);
        return absoluteDifference;
    }
    public getTimeInMilisenods() 
    {
        return this.dateOfMessuring.getTime();
    }
}
