import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { Login } from "../auth.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public defaultUsername = "";
  public defaultPassword = "";
  public defaultCompanyId = "";
  public isLoading = false;

  constructor(private router: Router, private store: Store) {
    this.ngOnInit();
  }

  ngOnInit() {
    let access_token: string = JSON.parse(
      localStorage.getItem("auth")
    )?.access_token;

    if (!!access_token) {
      this.router.navigate(["/overview"]);
    }
  }

  submit(e: CustomEvent) {
    this.isLoading = true;
    const data = (<any>e).formData as {
      username: string;
      password: string;
      companyId: string;
    };

    sessionStorage.setItem(
      "currentLoginUsernameSubmit",
      data.username.toLowerCase()
    );
    sessionStorage.setItem(
      "currentLoginCompanyIdSubmit",
      data.companyId.toLowerCase()
    );

    this.store.dispatch(
      new Login(data.username, data.password, data.companyId)
    );

    setTimeout(() => {
      this.router.navigate(["/overview"]);
      this.isLoading = false;
    }, 500);
  }
}
