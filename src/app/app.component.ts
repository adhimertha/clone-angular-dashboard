import { Component } from '@angular/core';
import { SideMenu } from './interfaces';
import { UtilService } from './util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public componentId = "local";
  public componentFrom = "Stencil Component from Local";
  public isSidebarCollapse = false;
  public appPages: SideMenu[];

  constructor(
    public util: UtilService,
  ) {
    console.log(this.util);

    this.initializeApp();
  }

  initializeApp() {
    this.reloadSideMenu();
  }

  reloadSideMenu() {
    const thisCurrentUrlAddr = window.location.pathname;
    // this.appPages = [
    //   {
    //     title: this.util.translating("Overview"),
    //     url: "/overview",
    //     icon: "vertical_split",
    //     id: "overview",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Departments"),
    //     url: "/department",
    //     icon: "department",
    //     id: "departments",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Properties"),
    //     url: "/property",
    //     icon: "home",
    //     id: "property",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Map"),
    //     url: "/map/leaflet",
    //     icon: "map",
    //     id: "map",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Access"),
    //     url: "/access-v2",
    //     icon: "home",
    //     id: "accessV2",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Locks"),
    //     url: "/locks",
    //     icon: "lock",
    //     id: "locks",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Users"),
    //     url: "/team",
    //     icon: "home",
    //     id: "team",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Users"),
    //     url: "/lock-users",
    //     icon: "home",
    //     id: "lockUsers",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Jobs_List"),
    //     url: "/job",
    //     icon: "home",
    //     id: "job",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Users"),
    //     url: "/users",
    //     icon: "person",
    //     id: "users",
    //     disabled: false,
    //     childrenOf: "userManagement",
    //   },
    //   {
    //     title: "User Management",
    //     url: "/users",
    //     icon: "person",
    //     id: "userManagement",
    //     disabled: true,
    //     childrenOf: "userManagement",
    //     children: [
    //       {
    //         title: "Users",
    //         url: "/users",
    //         icon: "person",
    //         id: "users",
    //         childrenOf: "userManagement",
    //       },
    //       {
    //         title: "User Group",
    //         url: "/user-group",
    //         icon: "people",
    //         id: "userGroup",
    //         childrenOf: "userManagement",
    //       },
    //       {
    //         title: "Roles",
    //         url: "/roles",
    //         icon: "ballot",
    //         id: "roles",
    //         childrenOf: "userManagement",
    //       },
    //       {
    //         title: "Policies",
    //         url: "/policies",
    //         icon: "subject",
    //         id: "policies",
    //         childrenOf: "userManagement",
    //       },
    //     ],
    //   },
    //   {
    //     title: this.util.translating("API"),
    //     url: "/user-api",
    //     icon: "code",
    //     id: "apiKey",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("My_Profile"),
    //     url: "/my-profile",
    //     icon: "home",
    //     id: "myProfile",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    //   {
    //     title: this.util.translating("Settings"),
    //     url: "/settings",
    //     icon: "settings",
    //     id: "settings",
    //     disabled: false,
    //     childrenOf: "settings",
    //     open: thisCurrentUrlAddr.substr(0, 9) === "/settings",
    //     children: [
    //       {
    //         title: this.util.translating("Security"),
    //         url: "/settings/security",
    //         icon: "settings",
    //         id: "security",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Dashboard_Audit_Trail"),
    //         url: "/settings/audit-trail",
    //         icon: "settings",
    //         id: "auditTrail",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Email_Template"),
    //         url: "/settings/email-template",
    //         icon: "settings",
    //         id: "emailTemplate",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Profile"),
    //         url: "/settings/profile",
    //         icon: "settings",
    //         id: "profile",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Job_status"),
    //         url: "/settings/job-status",
    //         icon: "settings",
    //         id: "jobStatus",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Billing"),
    //         url: "/settings/billing",
    //         icon: "settings",
    //         id: "billing",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Analytics"),
    //         url: "/settings/analytics",
    //         icon: "settings",
    //         id: "analytics",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Notifications"),
    //         url: "/settings/notifications",
    //         icon: "settings",
    //         id: "notifications",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Notifications_integration"),
    //         url: "/settings/notifications-integration",
    //         icon: "settings",
    //         id: "notificationsIntegration",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Change_language"),
    //         url: "/settings/change-language",
    //         icon: "settings",
    //         id: "changeLanguage",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //       {
    //         title: this.util.translating("Integrations_setup"),
    //         url: "/settings/account-setting-v2",
    //         icon: "settings",
    //         id: "accountSetting",
    //         disabled: false,
    //         childrenOf: "settings",
    //       },
    //     ],
    //   },
    //   {
    //     title: this.util.translating("Support"),
    //     url: "/support",
    //     icon: "support",
    //     id: "support",
    //     disabled: false,
    //     childrenOf: "",
    //   },
    // ];
  }
}
