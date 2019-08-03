import { Injectable } from "@angular/core";
import { Route } from "../../models/Route/route";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class HistoryRoutesFileService {
  constructor(private storage: Storage) {}

  getRoutes(): Promise<Route[]> {
    return this.storage.get("history-routes");
  }

  setRoutes(routes: Route[]) {
    console.log(JSON.stringify(routes));
    this.storage.set("history-routes", routes);
  }
}
