import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotocomidaPage } from './fotocomida.page';

const routes: Routes = [
  {
    path: '',
    component: FotocomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotocomidaPageRoutingModule {}
