import { Component } from "@angular/core";
import { BackgroundMode } from "@ionic-native/background-mode/ngx";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { LocationService } from "./services/location/location.service";
import { RouteRegisterService } from "./services/RouteRegister/route-register.service";
import { HistoryRoutesFileService } from "./services/storage/history-routes-file.service";
import { HistoryRoutesDataService } from "./services/store/history-routes-data.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private backgroundMode: BackgroundMode,
    private locationService: LocationService,
    private routeRegisterService: RouteRegisterService,
    private historyRoutesFileService: HistoryRoutesFileService,
    private historyRoutesDataService: HistoryRoutesDataService
  ) {
    this.initializeApp();
    this.backgroundMode.enable();
    this.historyRoutesFileService.getRoutes().then(routes => {
      this.historyRoutesDataService.updateRoutes(routes);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
