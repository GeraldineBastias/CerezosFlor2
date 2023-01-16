import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarcomidaPage } from './agregarcomida.page';




const routes: Routes = [
  {
    path: '',
    component: AgregarcomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[],
})

export class AgregarcomidaPageRoutingModule {}








