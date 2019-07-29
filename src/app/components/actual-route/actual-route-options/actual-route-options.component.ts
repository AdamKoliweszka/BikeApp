import { Component, OnInit, Input } from "@angular/core";
import { ActualRouteDataService } from "../../../services/store/actual-route-data.service";
import {
  faPlay,
  faPause,
  faStop,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

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
