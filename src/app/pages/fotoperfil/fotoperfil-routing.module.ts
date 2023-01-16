import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoperfilPage } from './fotoperfil.page';

const routes: Routes = [
  {
    path: '',
    component: FotoperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotoperfilPageRoutingModule {}
