import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../map/MapInstance/map-instance";
import { ActualRouteDataService } from "../services/store/actual-route-data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
