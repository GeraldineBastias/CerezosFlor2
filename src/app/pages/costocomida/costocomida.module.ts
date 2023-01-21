import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostocomidaPageRoutingModule } from './costocomida-routing.module';

import { CostocomidaPage } from './costocomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostocomidaPageRoutingModule
  ],
  declarations: [CostocomidaPage]
})
export class CostocomidaPageModule {}
