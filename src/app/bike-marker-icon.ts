import { MarkerIcon } from './marker-icon';

export class BikeMarkerIcon implements MarkerIcon{
    iconUrl: string;
    shadowUrl: string;
    iconSize: number[];
    iconAnchor: number[];
    constructor()
    {
        this.iconUrl = '../../assets/bike.png';
        this.shadowUrl = null;
        this.iconSize = new Array(32, 32);
        this.iconAnchor = new Array(16, 32);
    }
}
