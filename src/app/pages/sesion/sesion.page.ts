import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private menuController: MenuController, private router: Router, private bd: BdService, private toastController: ToastController) {
    menuController.enable(false, "first")
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
        this.presentToast("Bienvenido" + this.ingreso.nombre);
        this.router.navigate(['/perfildue']);
      } else {
        if (this.Usuario[0].fk_id_rol == 1) { //CLIENTE
          this.presentToast("Bienvenido" + this.ingreso.nombre);
          this.router.navigate(['/menu']);
        }
      }
    }
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: 'Contraseña o Nombre incorrectos, intente nuevamente',
      duration: 2000

    });
    toast.present();
  }

}