import { NgModule } from "@angular/core";
import { OverviewPage } from "./overview.page";
import { RouterModule, Routes } from "@angular/router";
import { ShareModule } from "../share.module";

const routes: Routes = [
  {
    path: "",
    component: OverviewPage,
  },
];

@NgModule({
  declarations: [OverviewPage],
  imports: [ShareModule, RouterModule, RouterModule.forChild(routes)],
})
export class OverviewPageModule {}
