import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamunePage } from './ramune.page';

const routes: Routes = [
  {
    path: '',
    component: RamunePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamunePageRoutingModule {}
