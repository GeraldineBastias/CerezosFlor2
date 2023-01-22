import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';



@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})

export class SesionPage implements OnInit {
  hide = true;

  usuarios: any = [{

    id:'',
    nombre: '',
    clave: '',
    id_rol: ''
  }];

  Usuario: any[] = []

  ingreso: any = {
    nombre: '',
    clave: ''
  };

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

  constructor(public nativeStorage: NativeStorage,private menuController: MenuController, private router: Router, private bd: BdService, private toastController: ToastController) {
    menuController.enable(false, "first")
    this.GetID()
    this.GetTitu()
    this.GetText()
    this.GetCosto()
    this.GetFoto()
  }


  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item;
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

  async iniciarSesion() {
    await this.bd.login(this.ingreso.nombre, this.ingreso.clave);
    if (this.ingreso.nombre.length == 0) {
      this.presentToast("Por favor Ingrese su nombre de Usuario");
    }
    else if (this.ingreso.clave.length == 0) {
      this.presentToast("Ingrese Su Contraseña");
    }
    else if (this.Usuario.length == 0) {
      this.presentToast("Usuario y/o Contraseña incorrecta");
    }
    else {
      if (this.Usuario[0].fk_id_rol == 2) { // DUEÑO
        this.nativeStorage.setItem('IDComida', this.a);
        this.nativeStorage.setItem('TituComida', this.b);
        this.nativeStorage.setItem('TextComida', this.c);
        this.nativeStorage.setItem('FotoComida', this.d);
        this.nativeStorage.setItem('CostoComida', this.e);
    
        this.presentToast("Bienvenido " + this.ingreso.nombre);
        this.router.navigate(['/perfildue']);
      } else {
        if (this.Usuario[0].fk_id_rol == 1) { //CLIENTE
          this.nativeStorage.setItem('IDComida', this.a);
          this.nativeStorage.setItem('TituComida', this.b);
          this.nativeStorage.setItem('TextComida', this.c);
          this.nativeStorage.setItem('FotoComida', this.d);
          this.nativeStorage.setItem('CostoComida', this.e);
      
          this.presentToast("Bienvenido " + this.ingreso.nombre);
          this.router.navigate(['/inicio']);
        }
      }
    }
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
  
    });
    toast.present();
  }

}