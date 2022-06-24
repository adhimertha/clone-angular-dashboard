import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UtilService } from "src/app/util.service";

@Component({
  selector: "app-property-table",
  templateUrl: "./property-table.component.html",
  styleUrls: ["./property-table.component.scss"],
})
export class PropertyTableComponent implements OnInit {
  @Output() onScrollTableEvent = new EventEmitter();

  constructor(public util: UtilService) {}

  ngOnInit(): void {}
}
