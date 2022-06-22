import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PropertyPage } from "./page/property.page";
import { ShareModule } from "../share.module";
import { RouterModule, Routes } from "@angular/router";
import { PropertyListPage } from "./list/property-list";

const routes: Routes = [
  {
    path: "",
    component: PropertyListPage,
  },
  {
    path: "page/:id",
    component: PropertyPage,
  },
];

@NgModule({
  declarations: [PropertyPage, PropertyListPage],
  imports: [CommonModule, ShareModule, RouterModule.forChild(routes)],
})
export class PropertyPageModule {}
