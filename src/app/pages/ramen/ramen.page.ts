import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-ramen',
  templateUrl: './ramen.page.html',
  styleUrls: ['./ramen.page.scss'],
})
export class RamenPage implements OnInit {
  food: any;
  Comida: any[] = [];

  idextras: any = 0;
  Tituextras: any;
  Textextras: any;
  Costoextras: any;
  Fotoextras: any;

  constructor(public nativeStorage: NativeStorage,private router: Router, private bd: BdService, private toastController: ToastController) {
    this.GetID()
    this.GetTitu()
    this.GetText()
    this.GetCosto()
    this.GetFoto()
   }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchComidas().subscribe(item => {
          this.Comida = item;
        })
      }
    })
  }

  GetID() {
    this.nativeStorage.getItem('IDComida').then((data)=>{
      //this.presentAlert1(data);
      this.idextras = data
   })
  }
  GetTitu() {
    this.nativeStorage.getItem('TituComida').then((data)=>{
      //this.presentAlert1(data);
      this.Tituextras = data
   })
  }
  GetText() {
    this.nativeStorage.getItem('TextComida').then((data)=>{
      //this.presentAlert1(data);
      this.Textextras = data
   })
  }
  GetCosto() {
    this.nativeStorage.getItem('CostoComida').then((data)=>{
      //this.presentAlert1(data);
      this.Costoextras = data
   })
  }
  GetFoto() {
    this.nativeStorage.getItem('FotoComida').then((data)=>{
      //this.presentAlert1(data);
      this.Fotoextras = data
   })
  }

  anadir(){
    this.presentToast("El " + this.Tituextras + " se ha añadido al pedido");
    this.nativeStorage.setItem('IDComida', this.idextras);
    this.nativeStorage.setItem('TituComida', this.Tituextras);
    this.nativeStorage.setItem('TextComida',this.Textextras );
    this.nativeStorage.setItem('FotoComida', this.Fotoextras);
    this.nativeStorage.setItem('CostoComida', this.Costoextras);

    this.router.navigate(['/carrito']);
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
  
    });
    toast.present();
  }
  
}
