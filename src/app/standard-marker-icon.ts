import { MarkerIcon } from './marker-icon';

export class StandardMarkerIcon implements MarkerIcon{
    iconUrl: string;
    shadowUrl: string;
    iconSize: number[];
    iconAnchor: number[];
    constructor()
    {
        this.iconUrl = '../../assets/leaflet/images/marker-icon.png';
        this.shadowUrl = '../../assets/leaflet/images/marker-shadow.png';
        this.iconSize = new Array(24, 36);
        this.iconAnchor = new Array(12, 36);
    }

}
