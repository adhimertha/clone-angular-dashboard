import { FindOptions } from "@igloohomeco/types";

// Action department list
export class ResetGetDepartmentList {
  static type = "[DepartmentList Page] ResetGetDepartmentList";
}

export class GetDepartmentList {
  static type = "[DepartmentList Page] GetDepartmentList";
  constructor(public findOptions: FindOptions) {}
}
