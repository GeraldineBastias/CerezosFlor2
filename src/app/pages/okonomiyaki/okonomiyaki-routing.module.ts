import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OkonomiyakiPage } from './okonomiyaki.page';

const routes: Routes = [
  {
    path: '',
    component: OkonomiyakiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OkonomiyakiPageRoutingModule {}
