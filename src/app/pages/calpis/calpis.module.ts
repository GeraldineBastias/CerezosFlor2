import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalpisPageRoutingModule } from './calpis-routing.module';

import { CalpisPage } from './calpis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalpisPageRoutingModule
  ],
  declarations: [CalpisPage]
})
export class CalpisPageModule {}
