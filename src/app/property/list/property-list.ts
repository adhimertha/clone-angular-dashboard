import { Component, HostListener, OnInit } from "@angular/core";
import { Breadcrumb } from "src/app/interfaces";
import { UtilService } from "src/app/util.service";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.html",
  styleUrls: ["./property-list.scss"],
})
export class PropertyListPage implements OnInit {
  public breadcrumbData: Breadcrumb;
  public numbers: number[];

  constructor(public util: UtilService) {
    this.numbers = Array(5).map((x, i) => i); // [0,1,2,3,4]

    this.setBreadcrumbData();
  }

  @HostListener("document:scroll", ["$event"])
  onElementScroll($event: any) {
    console.log($event);
  }

  ngOnInit(): void {}

  filterData(data: CustomEvent) {
    console.log(data);
  }

  setBreadcrumbData() {
    this.breadcrumbData = {
      parents: [
        {
          title: "Overview",
          url: "/overview",
        },
      ],
      title: "Property",
      url: "/property",
    };
  }
}
