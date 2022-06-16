import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { User } from "../interfaces";

export interface AuthDataModelState {
  user: User[];
}

@State<AuthDataModelState>({
  name: "auth",
  defaults: {
    user: [],
  },
})
@Injectable()
export class AuthState {
  constructor() {}
}
