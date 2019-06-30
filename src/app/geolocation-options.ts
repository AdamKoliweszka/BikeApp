export class GeolocationOptions {
    maximumAge : number;
    timeout : number;
    enableHighAccuracy : boolean;
    constructor()
    {
        this.maximumAge = 0;
        this.timeout = Infinity;
        this.enableHighAccuracy = true;
    }
}
