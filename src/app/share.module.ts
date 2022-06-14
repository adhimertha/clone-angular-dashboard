import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IglooUiComponent } from "src/component/igloo-ui/igloo-ui.component";
import { IglooSelectLangComponent } from "src/component/igloo-select-lang/igloo-select-lang.component";
import { IglooButtonComponent } from "src/component/igloo-button/igloo-button.component";
import { BreadcrumbComponent } from "src/component/breadcrumb/breadcrumb.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    IglooUiComponent,
    IglooSelectLangComponent,
    IglooButtonComponent,
    BreadcrumbComponent,
  ],
  exports: [
    IglooUiComponent,
    IglooSelectLangComponent,
    IglooButtonComponent,
    BreadcrumbComponent,
  ],
})
export class ShareModule {}
