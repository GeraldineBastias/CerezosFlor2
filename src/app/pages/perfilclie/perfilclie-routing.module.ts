import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilcliePage } from './perfilclie.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilcliePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilcliePageRoutingModule {}
