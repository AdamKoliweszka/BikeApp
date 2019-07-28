import { Component, OnInit, Input } from "@angular/core";
import { ActualRouteDataService } from "../services/store/actual-route-data.service";
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
  @Input() isRecording: boolean;
  constructor(private actualRouteDataService: ActualRouteDataService) {}

  ngOnInit() {}

  start(): void {
    this.actualRouteDataService.updateIsRegistering(!this.isRecording);
  }

  stop(): void {}

  back(): void {}
}
