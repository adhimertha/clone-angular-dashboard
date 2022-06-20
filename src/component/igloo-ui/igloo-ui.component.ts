import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-igloo-ui",
  templateUrl: "./igloo-ui.component.html",
  styleUrls: ["./igloo-ui.component.scss"],
})
export class IglooUiComponent implements OnInit {
  @Input() uiType = "";

  /** For uiType === igloo-ui-error-box */
  @Input() errorMessage = "";

  constructor() {}

  ngOnInit() {}
}
