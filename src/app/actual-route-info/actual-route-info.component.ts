import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-actual-route-info",
  templateUrl: "./actual-route-info.component.html",
  styleUrls: ["./actual-route-info.component.scss"]
})
export class ActualRouteInfoComponent implements OnInit {
  @Input() speed: number;
  @Input() distance: number;
  constructor() {}

  ngOnInit() {}
}
