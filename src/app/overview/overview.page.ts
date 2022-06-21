import { Component, OnInit } from "@angular/core";
import { Breadcrumb } from "../interfaces";
import { UtilService } from "../util.service";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"],
})
export class OverviewPage implements OnInit {
  public breadcrumbData: Breadcrumb;

  constructor(public util: UtilService) {
    this.setBreadcrumbData();
  }

  setBreadcrumbData() {
    this.breadcrumbData = {
      title: "Overview",
      url: "/overview",
    };
  }

  ngOnInit() {
    console.log("overview page init");
  }
}
