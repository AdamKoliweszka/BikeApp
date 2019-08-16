import { Component, OnInit, Input } from "@angular/core";
import { ActualRouteDataService } from "../../../services/store/actual-route-data.service";
import {
  faPlay,
  faPause,
  faStop,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { RouteRegisterService } from "src/app/services/RouteRegister/route-register.service";

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
  constructor(private routeRegisterService: RouteRegisterService) {}

  ngOnInit() {}

  start(): void {
    if (!this.isRegistering) {
      this.routeRegisterService.startRegister();
    } else {
      this.routeRegisterService.resumeRegister();
    }
  }

  pause(): void {
    this.routeRegisterService.pauseRegister();
  }

  stop(): void {
    this.routeRegisterService.stopRegister();
  }
}
