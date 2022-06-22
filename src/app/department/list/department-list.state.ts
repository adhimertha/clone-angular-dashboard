import { Injectable } from "@angular/core";
import { FindOptions, ResponseData } from "@igloohomeco/types";
import { Action, State, StateContext } from "@ngxs/store";
import { ApiService } from "src/app/api.service";
import { Department } from "src/app/interfaces";

interface StateDataModal {
  findOptions: FindOptions;
  result: ResponseData<Department[]>;
  isInProgress: boolean;
}

@State<StateDataModal>({
  name: "departmentState",
  defaults: {
    findOptions: undefined,
    result: undefined,
    isInProgress: undefined,
  },
})
@Injectable()
export class DepartmentState {
  constructor(private api: ApiService) {}
}
