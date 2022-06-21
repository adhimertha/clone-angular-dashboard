import { Component, HostListener, OnInit } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { Logout } from "src/app/auth/auth.actions";
import { SideMenu } from "src/app/interfaces";
import { UtilService } from "src/app/util.service";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
})
export class MainLayoutComponent implements OnInit {
  public componentId = "local";
  public componentFrom = "Stencil Component from Local";
  public isSidebarCollapse = false;
  public isSidebarOpen = false;
  public appPages: SideMenu[];
  public currentUrlAddr = "/overview";
  public activeUrl = this.currentUrlAddr;

  hideMenuController() {
    if (window.innerWidth > 0) {
      this.isSidebarOpen = false;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.hideMenuController();
  }

  constructor(
    public util: UtilService,
    private router: Router,
    private store: Store
  ) {
    this.initializeApp();
    this.urlCondition();

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.urlCondition();
      }
    });
  }

  ngOnInit() {
    console.log(this.router.config);
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

  getFirstURLSegment(url: string) {
    return "/" + url.split("/")[1];
  }

  urlCondition() {
    if (!!this.router.routerState.snapshot.root.firstChild) {
      this.currentUrlAddr =
        "/" + this.router.routerState.snapshot.root.firstChild.routeConfig.path;
    }

    if (this.currentUrlAddr !== window.location.pathname) {
      if (this.currentUrlAddr.length < window.location.pathname.length) {
        this.currentUrlAddr = window.location.pathname;
      }
    }
    this.activeUrl = "/" + this.currentUrlAddr.split("/")[1];
  }

  logout() {
    let isConfirm = confirm("Are you sure you want to logout?");

    if (isConfirm) {
      this.store.dispatch(new Logout());
      this.router.navigate(["/login"]);
    }
  }
}
