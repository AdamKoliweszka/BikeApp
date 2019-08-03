import { Injectable } from "@angular/core";
import { Route } from "../../models/Route/route";
import { Storage } from "@ionic/storage";
import { serialize, deserializeArray } from "class-transformer";
@Injectable({
  providedIn: "root"
})
export class HistoryRoutesFileService {
  constructor(private storage: Storage) {}

  getRoutes(): Promise<Route[]> {
    return this.storage.get("history-routes").then(serializedRoutes => {
      return deserializeArray(Route, serializedRoutes);
    });
  }

  setRoutes(routes: Route[]) {
    let serializedRoutes = serialize(routes);
    console.log(serializedRoutes);
    this.storage.set("history-routes", serializedRoutes);
  }
}
