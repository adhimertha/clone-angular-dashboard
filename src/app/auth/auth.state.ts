import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "../interfaces";
import { Login, Logout } from "./auth.actions";

export interface AuthDataModelState {
  user: User;
  action: string;
}

@State<AuthDataModelState>({
  name: "auth",
  defaults: {
    user: {
      access_token: "",
      companyId: "",
      username: "",
    },
    action: "",
  },
})
@Injectable()
export class AuthState {
  constructor() {}

  @Selector()
  static getUser(state: AuthDataModelState) {
    return state.user;
  }

  @Action(Login)
  login(ctx: StateContext<AuthDataModelState>, payload: Login) {
    // generate fake token
    const rand = () => Math.random().toString(36).substr(2);
    const access_token = rand() + rand() + rand() + rand() + rand() + rand();

    const dataStore = JSON.stringify({
      access_token,
      username: payload.username,
      companyId: payload.companyId,
    });

    ctx.patchState({
      user: {
        access_token: access_token,
        companyId: payload.companyId,
        username: payload.username,
      },
      action: Login.type,
    });

    localStorage.setItem("auth", dataStore);

    console.log(ctx.getState());
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthDataModelState>) {
    ctx.patchState({
      user: {
        access_token: "",
        companyId: "",
        username: "",
      },
      action: Logout.type,
    });

    localStorage.removeItem("auth");
  }
}
