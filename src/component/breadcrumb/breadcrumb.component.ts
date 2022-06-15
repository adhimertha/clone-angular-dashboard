import { Component, Input, OnInit } from "@angular/core";
import { Breadcrumb } from "src/app/interfaces";
import { UtilService } from "src/app/util.service";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
  @Input() data: Breadcrumb;

  constructor(public util: UtilService) {}

  ngOnInit() {}
}
