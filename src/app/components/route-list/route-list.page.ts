import { Component, OnInit } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { Route } from "src/app/models/Route/route";
import { HistoryRoutesDataService } from "src/app/services/store/history-routes-data.service";

@Component({
  selector: "app-route-list",
  templateUrl: "route-list.page.html",
  styleUrls: ["route-list.page.scss"]
})
export class RouteList implements OnInit {
  routes$: Observable<Route[]>;
  constructor(private historyRoutesDataService: HistoryRoutesDataService) {
    this.routes$ = historyRoutesDataService.getRoutes();
  }

  ngOnInit() {}
}
