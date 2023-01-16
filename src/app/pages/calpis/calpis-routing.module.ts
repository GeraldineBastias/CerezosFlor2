import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalpisPage } from './calpis.page';

const routes: Routes = [
  {
    path: '',
    component: CalpisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalpisPageRoutingModule {}
