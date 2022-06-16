import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public defaultUsername = "";
  public defaultPassword = "";
  public defaultCompanyId = "";
  public showLoading = false;

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log("submit");
  }
}
