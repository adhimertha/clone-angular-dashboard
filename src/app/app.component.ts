import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public componentId = "local";
  public componentFrom = "Stencil Component from Local";

  constructor(private router: Router) {
    this.ngOnInit();
  }

  ngOnInit() {}
}
