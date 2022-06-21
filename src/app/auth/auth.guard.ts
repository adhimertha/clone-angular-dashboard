import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { User } from "../interfaces";
import { AuthState } from "./auth.state";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  @Select(AuthState.getUser) user$: Observable<User>;

  public unGuardPage = ["/login", "/verify"];

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("AuthGuard");

    this.user$?.subscribe((user) => {
      if (!!!user.access_token) {
        console.log("AuthGuard: user not logged in STATE");

        let access_token: string = JSON.parse(
          localStorage.getItem("auth")
        )?.access_token;

        if (!!!access_token) {
          console.log("AuthGuard: user not logged in LOCAL STORAGE");
          this.router.navigate(["/login"]);
          return false;
        }
      }
    });

    console.log("AuthGuard: user logged in");
    return true;
  }
}
