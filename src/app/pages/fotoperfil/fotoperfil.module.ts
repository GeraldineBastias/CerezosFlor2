import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FotoperfilPageRoutingModule } from './fotoperfil-routing.module';
import { FotoperfilPage } from './fotoperfil.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoperfilPageRoutingModule
  ],
  declarations: [FotoperfilPage]
})
export class FotoperfilPageModule {}
