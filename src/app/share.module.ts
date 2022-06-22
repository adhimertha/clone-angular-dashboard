import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IglooUiComponent } from "src/component/igloo-ui/igloo-ui.component";
import { IglooSelectLangComponent } from "src/component/igloo-select-lang/igloo-select-lang.component";
import { IglooButtonComponent } from "src/component/igloo-button/igloo-button.component";
import { BreadcrumbComponent } from "src/component/breadcrumb/breadcrumb.component";
import { RouterModule } from "@angular/router";
import { LoginFormComponent } from "src/component/login-form/login-form.component";
import { DepartmentsTableComponent } from "src/component/departments-table/departments-table.component";
import { FormsModule } from "@angular/forms";
import { IglooInputSearchComponent } from "src/component/igloo-input-search/igloo-input-search.component";

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule],
  declarations: [
    IglooUiComponent,
    IglooSelectLangComponent,
    IglooButtonComponent,
    BreadcrumbComponent,
    LoginFormComponent,
    DepartmentsTableComponent,
    IglooInputSearchComponent,
  ],
  exports: [
    IglooUiComponent,
    IglooSelectLangComponent,
    IglooButtonComponent,
    BreadcrumbComponent,
    LoginFormComponent,
    DepartmentsTableComponent,
    IglooInputSearchComponent,
  ],
})
export class ShareModule {}
