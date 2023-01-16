import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OkonomiyakiPageRoutingModule } from './okonomiyaki-routing.module';

import { OkonomiyakiPage } from './okonomiyaki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkonomiyakiPageRoutingModule
  ],
  declarations: [OkonomiyakiPage]
})
export class OkonomiyakiPageModule {}
