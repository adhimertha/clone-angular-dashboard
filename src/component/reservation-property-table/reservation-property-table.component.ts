import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UtilService } from "src/app/util.service";

@Component({
  selector: "app-reservation-property-table",
  templateUrl: "./reservation-property-table.component.html",
  styleUrls: ["./reservation-property-table.component.scss"],
})
export class ReservationPropertyTableComponent implements OnInit {
  @Output() onScrollTableEvent = new EventEmitter();

  constructor(public util: UtilService) {}

  ngOnInit(): void {}
}
