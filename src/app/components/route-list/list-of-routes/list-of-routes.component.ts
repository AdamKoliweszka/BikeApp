import { Component, OnInit, Input } from "@angular/core";
import { Route } from "src/app/models/Route/route";

@Component({
  selector: "list-of-routes",
  templateUrl: "./list-of-routes.component.html",
  styleUrls: ["./list-of-routes.component.scss"]
})
export class ListOfRoutes implements OnInit {
  @Input() routes: Route[];
  constructor() {}

  ngOnInit() {}
}
