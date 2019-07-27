import { Component, OnInit } from '@angular/core';
import { ActualRouteDataService } from "../services/store/actual-route-data.service";

@Component({
  selector: 'app-actual-route-options',
  templateUrl: './actual-route-options.component.html',
  styleUrls: ['./actual-route-options.component.scss'],
})
export class ActualRouteOptionsComponent implements OnInit {

  constructor(
    private actualRouteDataService: ActualRouteDataService) { }

  ngOnInit() {}

  start(): void {
    this.actualRouteDataService.updateIsRegistering(true);
  }

  stop(): void {
    this.actualRouteDataService.updateIsRegistering(false);
  }

}
