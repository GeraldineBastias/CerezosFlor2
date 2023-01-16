import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  hide = true;
  Usuario: any[] = []

  nombreA='';
  correoA='';
  passA='';
  passRepetir='';

  constructor(private bd: BdService, private activedRouter: ActivatedRoute,private router: Router, private toastController: ToastController, private alertController: AlertController) { }

  ngOnInit() {
  }

  ValidarTodo(){
    if (this.nombreA.length == 0) {
      this.presentToast("Ingrese su nombre de Usuario");
    }else if (this.nombreA.length < 4 && this.nombreA.length > 20) {
      this.presentToast("Su nombre debe tener entre 4 y 20 caracteres");
    }else if (this.correoA.length == 0) {
      this.presentToast("Ingrese Su Correo");
    }else if (this.passA.length == 0) {
      this.presentToast("Ingrese Su Contraseña");
    }else if (this.passA != this.passRepetir) {
      this.presentToast("La Contraseña no coincide");
    }else if (this.passA.length < 4 && this.passA.length > 20) {
      this.presentToast("Su Contraseña debe tener entre 4 y 20 caracteres");
    }
    else {
      //FALTA COMPLETAR//  this.bd.agregarUsuario(this.nombreA, this.correoA, this.passA , 2)
      this.presentToast("Cuenta Creada Exitosamente");
      this.router.navigate(['/sesion'])
     }
  }


  //MENSAJE//
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
  
    });
    toast.present();
  }
}
