import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomcomidaPage } from './nomcomida.page';

const routes: Routes = [
  {
    path: '',
    component: NomcomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomcomidaPageRoutingModule {}
