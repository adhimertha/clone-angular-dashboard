import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPage } from "./login/login.page";
import { ShareModule } from "../share.module";
import { RouterModule, Routes } from "@angular/router";
import { AuthLayoutComponent } from "../layout/auth-layout/auth-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, ShareModule],
  declarations: [LoginPage],
})
export class AuthModule {}
