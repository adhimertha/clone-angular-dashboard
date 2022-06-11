import { NgModule } from '@angular/core';
import { OverviewPage } from './overview.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage
  }
];

@NgModule({
  declarations: [OverviewPage],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OverviewPageModule { }
