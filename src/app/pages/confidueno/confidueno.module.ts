import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiduenoPageRoutingModule } from './confidueno-routing.module';

import { ConfiduenoPage } from './confidueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiduenoPageRoutingModule
  ],
  declarations: [ConfiduenoPage]
})
export class ConfiduenoPageModule {}
