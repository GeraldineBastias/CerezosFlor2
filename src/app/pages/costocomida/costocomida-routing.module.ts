import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostocomidaPage } from './costocomida.page';

const routes: Routes = [
  {
    path: '',
    component: CostocomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostocomidaPageRoutingModule {}
