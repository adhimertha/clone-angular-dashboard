import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepartmentPage } from "./page/department.page";
import { RouterModule, Routes } from "@angular/router";
import { ShareModule } from "../share.module";

const routes: Routes = [
  {
    path: "",
    component: DepartmentPage,
  },
];

@NgModule({
  declarations: [DepartmentPage],
  imports: [CommonModule, ShareModule, RouterModule.forChild(routes)],
})
export class DepartmentPageModule {}
