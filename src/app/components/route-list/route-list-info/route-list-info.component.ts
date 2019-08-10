import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HistoryRoutesDataService } from "src/app/services/store/history-routes-data.service";
import { Route } from "src/app/models/Route/route";

@Component({
  selector: "route-list-info",
  templateUrl: "./route-list-info.component.html",
  styleUrls: ["./route-list-info.component.scss"]
})
export class RouteInfoList implements OnInit {
  route: Route;
  constructor(
    activatedRoute: ActivatedRoute,
    historyRoutesDataService: HistoryRoutesDataService
  ) {
    activatedRoute.params.subscribe(params => {
      let id = params["id"];
      historyRoutesDataService.getRouteById(id).then(value => {
        console.log(id);
        this.route = value;
        console.log(value);
      });
    });
  }

  ngOnInit() {}
}
