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
  public isCloneHeader = true;

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
      title: "!##Test Lock Have On Department And Two Locks",
      url: "/property/2neVfuzRPGU9tqXze",
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
