import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomcomidaPageRoutingModule } from './nomcomida-routing.module';

import { NomcomidaPage } from './nomcomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomcomidaPageRoutingModule
  ],
  declarations: [NomcomidaPage]
})
export class NomcomidaPageModule {}
