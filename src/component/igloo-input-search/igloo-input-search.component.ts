import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-igloo-input-search",
  templateUrl: "./igloo-input-search.component.html",
  styleUrls: ["./igloo-input-search.component.scss"],
})
export class IglooInputSearchComponent implements OnInit {
  @Input() search: string = "";

  constructor() {}

  ngOnInit(): void {}

  clearSearch() {
    this.search = "";
  }
}
