import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private route: Router) {}

  ngOnInit() {}

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

    // generate fake token
    const rand = () => Math.random().toString(36).substr(2);

    const dataStore = JSON.stringify({
      access_token: rand() + rand() + rand() + rand() + rand() + rand(),
      username: data.username,
      companyId: data.companyId,
    });
    localStorage.setItem("auth", dataStore);

    setTimeout(() => {
      this.isLoading = false;
      this.route.navigate(["/overview"]);
    }, 500);
  }
}
