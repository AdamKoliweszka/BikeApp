import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { BackgroundMode } from "@ionic-native/background-mode/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { StoreModule } from "@ngrx/store";
import { ActualRouteStateModule } from "./store/actual-route/actual-route-store.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HistoryRoutesStateModul } from "./store/history-routes/history-routes-store.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({}),
    ActualRouteStateModule,
    HistoryRoutesStateModul,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [
    BackgroundMode,
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
