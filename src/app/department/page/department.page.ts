import { Component, HostListener, OnInit } from "@angular/core";
import { Breadcrumb } from "src/app/interfaces";
import { UtilService } from "src/app/util.service";

@Component({
  selector: "app-department",
  templateUrl: "./department.page.html",
  styleUrls: ["./department.page.scss"],
})
export class DepartmentPage implements OnInit {
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
      ],
      title: "Department",
      url: "/department",
    };
  }
}
