import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/overview",
    pathMatch: "full",
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "overview",
        loadChildren: "./overview/overview.module#OverviewPageModule",
        canActivate: [AuthGuard],
      },
      {
        path: "department",
        loadChildren: "./department/department.module#DepartmentPageModule",
        canActivate: [AuthGuard],
      },
      {
        path: "property",
        loadChildren: "./property/property.module#PropertyPageModule",
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
