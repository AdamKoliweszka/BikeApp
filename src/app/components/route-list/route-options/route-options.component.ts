import { Component, OnInit, Input } from "@angular/core";
import {
  faRoute,
  faInfo,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from "@angular/router";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
  selector: "route-options",
  templateUrl: "./route-options.component.html",
  styleUrls: ["./route-options.component.scss"]
})
export class RouteOptions implements OnInit {
  routeIcon = faRoute;
  infoIcon = faInfo;
  chartIcon = faChartLine;
  @Input() id;
  constructor() {}

  ngOnInit() {}
}
