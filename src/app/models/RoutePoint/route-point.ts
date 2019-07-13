import { TimeValue } from './time-value';
import { LngLat } from 'mapbox-gl';
declare let L;
export class RoutePoint extends LngLat implements TimeValue {

    private dateOfMessuring: Date;

    constructor(latitude: number, longtitude: number, date: Date) {
        super(longtitude,latitude);
        this.dateOfMessuring = date;
    }

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
