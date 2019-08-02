import { Component, OnInit, Input } from "@angular/core";
import { ActualRouteDataService } from "../../../services/store/actual-route-data.service";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "route-list-new",
  templateUrl: "./route-list-new.component.html",
  styleUrls: ["./route-list-new.component.scss"]
})
export class RouteListNew implements OnInit {
  plusIcon = faPlus;
  @Input() isRegistering: boolean;
  @Input() isPause: boolean;
  constructor(private actualRouteDataService: ActualRouteDataService) {}

  ngOnInit() {}

  start(): void {
    if (!this.isRegistering) {
      this.actualRouteDataService.updateIsRegistering(true);
    } else {
      this.actualRouteDataService.updateIsPause(false);
    }
  }

  pause(): void {
    this.actualRouteDataService.updateIsPause(true);
  }

  stop(): void {
    this.actualRouteDataService.updateIsRegistering(false);
    this.actualRouteDataService.updateIsPause(false);
  }
}
