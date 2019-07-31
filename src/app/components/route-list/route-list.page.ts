import { Component, OnInit } from "@angular/core";
import { MapInstance } from "../../map/MapInstance/map-instance";
import { Subscription, Observable } from "rxjs";
import { ActualRouteDataService } from "../../services/store/actual-route-data.service";

@Component({
  selector: "app-route-list",
  templateUrl: "route-list.page.html",
  styleUrls: ["route-list.page.scss"]
})
export class RouteList implements OnInit {
  constructor() {}

  ngOnInit() {}
}
