import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContraperPageRoutingModule } from './contraper-routing.module';

import { ContraperPage } from './contraper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContraperPageRoutingModule
  ],
  declarations: [ContraperPage]
})
export class ContraperPageModule {}
