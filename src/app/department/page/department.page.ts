import { Component, OnInit } from "@angular/core";
import { FindOptions } from "@igloohomeco/types";
import { Breadcrumb } from "src/app/interfaces";
import { UtilService } from "src/app/util.service";
import { Store } from "@ngxs/store";

@Component({
  selector: "app-department",
  templateUrl: "./department.page.html",
  styleUrls: ["./department.page.scss"],
})
export class DepartmentPage implements OnInit {
  public breadcrumbData: Breadcrumb;

  constructor(public util: UtilService, private store: Store) {
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
      ],
      title: "Department",
      url: "/department",
    };
  }
}
