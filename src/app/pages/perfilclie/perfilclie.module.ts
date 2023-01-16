import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilcliePageRoutingModule } from './perfilclie-routing.module';

import { PerfilcliePage } from './perfilclie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilcliePageRoutingModule
  ],
  declarations: [PerfilcliePage]
})
export class PerfilcliePageModule {}
