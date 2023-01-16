import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilduePageRoutingModule } from './perfildue-routing.module';

import { PerfilduePage } from './perfildue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilduePageRoutingModule
  ],
  declarations: [PerfilduePage]
})
export class PerfilduePageModule {}
