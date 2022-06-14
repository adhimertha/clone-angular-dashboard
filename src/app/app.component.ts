import { Component, HostListener } from "@angular/core";
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
  public isSidebarOpen = false;
  public appPages: SideMenu[];

  hideMenuController() {
    if (window.innerWidth > 0) {
      this.isSidebarOpen = false;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.hideMenuController();
  }

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
    const thisCurrentUrlAddr = window.location.pathname;
    this.appPages = [
      {
        title: "Settings",
        url: "/settings",
        icon: "settings",
        id: "settings",
        disabled: false,
        childrenOf: "settings",
        open: thisCurrentUrlAddr.substr(0, 9) === "/settings",
        children: [
          {
            title: "Security",
            url: "/settings/security",
            icon: "settings",
            id: "security",
            disabled: false,
            childrenOf: "settings",
          },
          {
            title: "Dashboard Audit Trail",
            url: "/settings/audit-trail",
            icon: "settings",
            id: "auditTrail",
            disabled: false,
            childrenOf: "settings",
          },
          {
            title: "Email Template",
            url: "/settings/email-template",
            icon: "settings",
            id: "emailTemplate",
            disabled: false,
            childrenOf: "settings",
          },
          {
            title: "Analytics",
            url: "/settings/analytics",
            icon: "settings",
            id: "analytics",
            disabled: false,
            childrenOf: "settings",
          },
          {
            title: "Change Language",
            url: "/settings/change-language",
            icon: "settings",
            id: "changeLanguage",
            disabled: false,
            childrenOf: "settings",
          },
        ],
      },
    ];
  }
}
