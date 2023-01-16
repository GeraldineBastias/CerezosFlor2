import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContraperPage } from './contraper.page';

const routes: Routes = [
  {
    path: '',
    component: ContraperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContraperPageRoutingModule {}
