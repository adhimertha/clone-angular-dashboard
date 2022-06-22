import { Component, OnInit } from "@angular/core";
import { Breadcrumb } from "src/app/interfaces";
import { UtilService } from "src/app/util.service";

@Component({
  selector: "app-property",
  templateUrl: "./property.page.html",
  styleUrls: ["./property.page.scss"],
})
export class PropertyPage implements OnInit {
  public breadcrumbData: Breadcrumb;

  constructor(public util: UtilService) {
    this.setBreadcrumbData();
  }

  ngOnInit(): void {}

  setBreadcrumbData() {
    this.breadcrumbData = {
      parents: [
        {
          title: "Overview",
          url: "/overview",
        },
        {
          title: "Property",
          url: "/property",
        },
      ],
      title: "Test Property",
      url: "/property/2",
    };
  }
}
