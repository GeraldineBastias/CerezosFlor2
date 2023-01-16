import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarcomidaPageRoutingModule } from './modificarcomida-routing.module';

import { ModificarcomidaPage } from './modificarcomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarcomidaPageRoutingModule
  ],
  declarations: [ModificarcomidaPage]
})
export class ModificarcomidaPageModule {}
