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
  public isCloneHeader = true;

  constructor(public util: UtilService) {
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

  onScrollTable(event: any) {
    const cloneHeader = document
      .getElementById("cloneHeader")
      .getElementsByClassName("table-wrapper")[0];
    cloneHeader.scrollLeft = event.srcElement.scrollLeft;
  }

  onScroll(
    event: any,
    headerContent: any,
    cloneHeaderTable: any,
    tableComponent: any
  ) {
    console.log("ok");

    const cloneElement = document
      .getElementById("tableElements")
      .cloneNode(true);
    if (this.isCloneHeader) {
      console.log(cloneElement);
      cloneHeaderTable.appendChild(cloneElement);
      let tbody = document
        .getElementById("cloneHeader")
        .getElementsByTagName("tbody")[0];
      tbody.style.display = "none";

      this.isCloneHeader = false;
    }

    cloneHeaderTable.style.top = `${headerContent.scrollHeight}px`;

    if (event.srcElement.scrollTop > headerContent.scrollHeight) {
      cloneHeaderTable.style.display = "block";
    } else {
      cloneHeaderTable.style.display = "none";
    }
    if (event.srcElement.scrollTop > tableComponent.scrollHeight) {
      cloneHeaderTable.style.display = "none";
    }
  }
}
