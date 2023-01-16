import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamunePageRoutingModule } from './ramune-routing.module';

import { RamunePage } from './ramune.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamunePageRoutingModule
  ],
  declarations: [RamunePage]
})
export class RamunePageModule {}
