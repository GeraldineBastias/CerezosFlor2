import { Usuario } from 'src/app/services/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  transform(value: string) {
    return value.split(' ').slice(0, 2).join(' ') + '...';
  }

  Comida: any[] = [];
  a: any = 0;
  b = " ";
  c = " ";
  d = " ";
  e = " ";

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
  GetText() {
    this.nativeStorage.getItem('TextComida').then((data)=>{
      //this.presentAlert1(data);
      this.Textextras = data
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

  Boton(){
    this.presentToast("El pedido de " + this.Tituextras + " se ha realizado con exito!!");
    this.nativeStorage.setItem('IDComida', this.a);
    this.nativeStorage.setItem('TituComida', this.b);
    this.nativeStorage.setItem('TextComida', this.c);
    this.nativeStorage.setItem('FotoComida', this.d);
    this.nativeStorage.setItem('CostoComida', this.e);

    this.router.navigate(['/inicio']);
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
  
    });
    toast.present();
  }

}
