import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnmitsuPageRoutingModule } from './anmitsu-routing.module';

import { AnmitsuPage } from './anmitsu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnmitsuPageRoutingModule
  ],
  declarations: [AnmitsuPage]
})
export class AnmitsuPageModule {}
