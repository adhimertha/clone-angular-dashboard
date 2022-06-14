import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor(private router?: Router) {} // private translate?: TranslateService,

  // translating(param: any, option?: any) {
  //   return this.translate.instant(param, option);
  // }

  refreshPage() {
    window.location.reload();
  }

  redirectLink(endpoint: string) {
    this.router.navigate([endpoint], { replaceUrl: true });
  }
}
