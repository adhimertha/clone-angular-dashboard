import { Injectable } from "@angular/core";
import { FindOptions, ResponseData } from "@igloohomeco/types";
import { Action, State } from "@ngxs/store";
import { ApiService } from "src/app/api.service";
import { FindDepartmentResponse } from "src/app/interfaces";

interface ExportDepartmentDetail {
  findOptions: FindOptions;
  result: ResponseData<FindDepartmentResponse>;
  isInProgress: boolean;
}

@State<ExportDepartmentDetail>({
  name: "exportDepartmentDetailState",
  defaults: {
    findOptions: undefined,
    result: undefined,
    isInProgress: undefined,
  },
})
@Injectable()
export class ExportDepartmentDetailState {
  constructor(public api: ApiService) {}
}
