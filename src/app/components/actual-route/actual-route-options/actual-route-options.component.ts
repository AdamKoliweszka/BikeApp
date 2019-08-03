import { Component, OnInit, Input } from "@angular/core";
import { ActualRouteDataService } from "../../../services/store/actual-route-data.service";
import {
  faPlay,
  faPause,
  faStop,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { HistoryRoutesDataService } from "src/app/services/store/history-routes-data.service";
import { take } from "rxjs/operators";

@Component({
  selector: "app-actual-route-options",
  templateUrl: "./actual-route-options.component.html",
  styleUrls: ["./actual-route-options.component.scss"]
})
export class ActualRouteOptionsComponent implements OnInit {
  pauseIcon = faPause;
  playIcon = faPlay;
  stopIcon = faStop;
  backIcon = faChevronLeft;
  @Input() isRegistering: boolean;
  @Input() isPause: boolean;
  constructor(
    private actualRouteDataService: ActualRouteDataService,
    private historyRoutesDataService: HistoryRoutesDataService
  ) {}

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
    this.actualRouteDataService
      .getRoute()
      .pipe(take(1))
      .subscribe(route => {
        this.historyRoutesDataService.addRoute(route);
        this.actualRouteDataService.stopRegister();
      });
  }
}
