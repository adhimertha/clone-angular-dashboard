import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { UtilService } from "src/app/util.service";

@Component({
  selector: "app-departments-table",
  templateUrl: "./departments-table.component.html",
  styleUrls: ["./departments-table.component.scss"],
})
export class DepartmentsTableComponent implements OnInit, OnChanges {
  @Input() hideCol = [];
  @Input() labelProperty = "Properties";
  @Input() labelManager = "Managers";
  @Input() labelStatus = "Status";
  @Input() colDeptNameLabel = "Department Name";
  @Input() colNumOfPropertiesLabel = "Number of Properties";
  @Input() colNumOfManagerLabel = "Number of Manager";
  @Input() colStatusLabel = "Status";
  @Input() colActionLabel = "";
  @Input() buttonTitle = "View";
  @Input() prefixId = "DepartmentsTable";
  @Input() loadMoreTitle = "Load More";
  @Input() isInProgress = false;
  @Input() infiniteScrollDisabled = false;
  @Input() inputData: {
    name?: string;
    numberOfProperties?: string;
    numberOfUsers?: string;
    status?: string;
  }[];

  @Output() onScrollTableEvent = new EventEmitter();

  constructor(public util: UtilService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
