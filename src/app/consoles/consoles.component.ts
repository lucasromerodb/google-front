import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

import { FilterPipe } from "../filter.pipe";

@Component({
  selector: "app-consoles",
  templateUrl: "./consoles.component.html",
  styleUrls: ["./consoles.component.css"]
})
export class ConsolesComponent {
  consoles: Observable<any[]>;
  filterText: any;
  constructor(db: AngularFireDatabase) {
    this.consoles = db.list("consoles").valueChanges();
  }
}
