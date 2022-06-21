import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPage } from "./login/login.page";
import { ShareModule } from "../share.module";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "login",
    component: LoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, ShareModule],
  declarations: [LoginPage],
})
export class AuthModule {}
