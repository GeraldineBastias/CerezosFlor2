import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnmitsuPage } from './anmitsu.page';

const routes: Routes = [
  {
    path: '',
    component: AnmitsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnmitsuPageRoutingModule {}
