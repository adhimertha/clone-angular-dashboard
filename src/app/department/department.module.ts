import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepartmentPage } from "./page/department.page";
import { RouterModule, Routes } from "@angular/router";
import { ShareModule } from "../share.module";
import { DepartmentListPage } from "./list/department-list";

const routes: Routes = [
  {
    path: "",
    component: DepartmentListPage,
  },
  {
    path: "page/:id",
    component: DepartmentPage,
  },
];

@NgModule({
  declarations: [DepartmentPage, DepartmentListPage],
  imports: [CommonModule, ShareModule, RouterModule.forChild(routes)],
})
export class DepartmentPageModule {}
