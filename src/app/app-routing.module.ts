import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "overview",
    loadChildren: "./overview/overview.module#OverviewPageModule",
    canActivate: [AuthGuard],
  },
  {
    path: "department",
    loadChildren: "./department/department.module#DepartmentPageModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
