import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotocomidaPageRoutingModule } from './fotocomida-routing.module';

import { FotocomidaPage } from './fotocomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotocomidaPageRoutingModule
  ],
  declarations: [FotocomidaPage]
})
export class FotocomidaPageModule {}
