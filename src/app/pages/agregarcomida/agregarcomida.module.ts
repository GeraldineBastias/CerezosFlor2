import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarcomidaPageRoutingModule } from './agregarcomida-routing.module';

import { AgregarcomidaPage } from './agregarcomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarcomidaPageRoutingModule
  ],
  declarations: [AgregarcomidaPage]
})
export class AgregarcomidaPageModule {}
