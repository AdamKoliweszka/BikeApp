import { MarkerOptions } from 'mapbox-gl';

export class BikeMarkerIcon implements MarkerOptions{
    element: HTMLElement;
    constructor()
    {
        this.element = document.createElement("icon");
        this.element.style.backgroundImage = "url('../../assets/bike.png')";
        this.element.style.width = "32px";
        this.element.style.height = "32px";
    }
}
