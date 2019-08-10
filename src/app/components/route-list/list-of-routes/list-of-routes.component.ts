import { Component, OnInit, Input } from "@angular/core";
import { Route } from "src/app/models/Route/route";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { HistoryRoutesDataService } from "src/app/services/store/history-routes-data.service";
@Component({
  selector: "list-of-routes",
  templateUrl: "./list-of-routes.component.html",
  styleUrls: ["./list-of-routes.component.scss"]
})
export class ListOfRoutes implements OnInit {
  closeIcon = faTimes;
  @Input() routes: Route[];
  constructor(private historyRoutesDataService: HistoryRoutesDataService) {}

  delete(id: number) {
    this.historyRoutesDataService.deleteRouteById(id);
  }
  ngOnInit() {}
}
