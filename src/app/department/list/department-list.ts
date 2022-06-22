import { Component, OnDestroy, OnInit } from "@angular/core";
import { FindOptions } from "@igloohomeco/types";
import { Store } from "@ngxs/store";
import { Subscription } from "rxjs";
import { Breadcrumb, Department } from "src/app/interfaces";
import { UtilService } from "src/app/util.service";

export interface DepartmentEx extends Department {
  show?: boolean;
}

@Component({
  selector: "app-department-list",
  templateUrl: "./department-list.html",
  styleUrls: ["./department-list.scss"],
})
export class DepartmentListPage implements OnInit, OnDestroy {
  public dataDepartment: DepartmentEx[] = [];
  public loadingDepartmentList = true;
  public currentTabSide = "property";
  public breadcrumbData: Breadcrumb;
  public loadingText = this.util.translating("Loading_data");
  public departmentListInfinityScrollDisabled: boolean;

  constructor(public util: UtilService, public store: Store) {
    this.setBreadcrumbData();
  }

  ngOnInit() {
    this.initData();
  }
  ngOnDestroy(): void {}

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

  initData() {
    this.getDataStateDepartmentActive();
  }

  getDataStateDepartmentActive() {
    // run getDepartmentLIst to get data from API
    console.log("sukses");
  }
}
