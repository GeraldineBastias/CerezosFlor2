import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmcomidasPage } from './admcomidas.page';

const routes: Routes = [
  {
    path: '',
    component: AdmcomidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmcomidasPageRoutingModule {}
