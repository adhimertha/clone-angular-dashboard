import { Component } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { SideMenu } from "./interfaces";
import { UtilService } from "./util.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public isAuth = false;
  public componentId = "local";
  public componentFrom = "Stencil Component from Local";
  public isSidebarCollapse = false;
  public appPages: SideMenu[];

  constructor(public util: UtilService, private router: Router) {
    this.initializeApp();
    this.checkAuth();
  }

  checkAuth() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (
          (event as NavigationStart).url == "/login" ||
          (event as NavigationStart).url == "/"
        ) {
          this.isAuth = false;
        } else {
          this.isAuth = true;
        }
      }
    });
  }

  initializeApp() {
    this.reloadSideMenu();
  }

  reloadSideMenu() {
    // setting route for sidebar
  }
}
