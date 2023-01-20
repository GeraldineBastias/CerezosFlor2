import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiduenoPage } from './confidueno.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiduenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiduenoPageRoutingModule {}
