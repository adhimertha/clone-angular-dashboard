import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import xregexp from "xregexp";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  maxInputEmailLength = "128";
  maxInputEmailLengthInt = 128;

  listenerFunction = [];

  nameWithSpecialCharXRegexp = xregexp("^[\\pL\\'\\.0-9\\-\\_\\#\\!]+$");

  constructor(private translate?: TranslateService, private router?: Router) {}

  translating(param: any, option?: any) {
    return this.translate.instant(param, option);
  }

  refreshPage() {
    window.location.reload();
  }

  redirectLink(endpoint: string) {
    this.router.navigate([endpoint], { replaceUrl: true });
  }

  /** Space Detector */
  ctypeSpace(input: string = "") {
    return input.replace(/\s/g, "").length > 0;
  }

  optimizePerPage(rowHeight: any) {
    return Math.ceil(window.innerHeight / rowHeight);
  }
}
