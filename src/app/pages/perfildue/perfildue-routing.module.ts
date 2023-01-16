import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilduePage } from './perfildue.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilduePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilduePageRoutingModule {}
