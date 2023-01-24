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
  direccionA='';
  fotoA='assets/default-avatar.png';
  rol = 1 ;

  constructor(private bd: BdService, private activedRouter: ActivatedRoute,private router: Router, private toastController: ToastController, private alertController: AlertController) { 

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


  ValidarTodo(){
  if (this.nombreA.length == 0) {
    this.presentToast("Ingrese su nombre de Usuario");
  }else if (this.nombreA.length > 50) {
    this.presentToast("El nombre puede contener un máximo de 50 caracteres");
  }else if (this.correoA.length == 0) {
    this.presentToast("Ingrese Su Correo");
  }else if (this.direccionA.length == 0) {
    this.presentToast("Ingrese Su Direccion");
  }else if (this.passA.length == 0 && this.passRepetir.length == 0) {
    this.presentToast("Ingrese Su Contraseña");
  }else if (this.passA != this.passRepetir) {
    this.presentToast("La Contraseña no coincide");
  }else if (this.passA.length < 4) {
    this.presentToast("Su Contraseña debe tener entre 4 y 20 caracteres");
  }else if (this.passA.length > 20) {
    this.presentToast("Su Contraseña debe tener entre 4 y 20 caracteres");
  }
  else {
    this.bd.agregarUsuario(this.nombreA, this.correoA, this.fotoA, this.direccionA, this.passA, this.rol)
    this.bd.agregarCliente(this.nombreA, this.correoA, this.fotoA, this.direccionA, this.passA, this.rol)
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
