import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AdmcomidasPageRoutingModule } from './admcomidas-routing.module';

import { AdmcomidasPage } from './admcomidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmcomidasPageRoutingModule
  ],
  declarations: [AdmcomidasPage]
})
export class AdmcomidasPageModule {}
