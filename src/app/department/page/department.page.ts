import { Component, OnInit } from "@angular/core";
import { Breadcrumb } from "src/app/interfaces";

@Component({
  selector: "app-department",
  templateUrl: "./department.page.html",
  styleUrls: ["./department.page.scss"],
})
export class DepartmentPage implements OnInit {
  public breadcrumbData: Breadcrumb;

  constructor() {
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
