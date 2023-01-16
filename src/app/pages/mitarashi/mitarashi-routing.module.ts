import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MitarashiPage } from './mitarashi.page';

const routes: Routes = [
  {
    path: '',
    component: MitarashiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MitarashiPageRoutingModule {}
