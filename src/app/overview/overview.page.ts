import { Component, OnInit } from "@angular/core";
import { Breadcrumb } from "../interfaces";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"],
})
export class OverviewPage implements OnInit {
  public breadcrumbData: Breadcrumb;

  constructor() {
    this.setBreadcrumbData();
  }

  setBreadcrumbData() {
    this.breadcrumbData = {
      title: "Overview",
      url: "/overview",
    };
  }

  ngOnInit() {}
}
