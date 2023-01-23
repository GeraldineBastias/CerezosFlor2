import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { ToastController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-agregarcomida',
  templateUrl: './agregarcomida.page.html',
  styleUrls: ['./agregarcomida.page.scss'],
})
export class AgregarcomidaPage implements OnInit {

  titulo: string ="";
  costo: number = 0;
  texto: string ="";
  foto: string ="assets/default.png";
  
  Comida: any [] = []

constructor(private router: Router, private bd: BdService, private camera: CameraService, private camara: Camera, private toastController: ToastController) {}

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchComidas().subscribe(item => {
          this.Comida = item;
        })
      }
    })
  }

  Galeria() {
    this.camera.Galery();
    this.foto = this.camera.image;
  }

  Guardar(){
    this.bd.insertarComida(this.titulo,this.texto,this.costo,this.foto);
    this.presentToast("La comida ha sido agregada con exito");
    this.router.navigate(['/admcomidas']);
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
  
    });
    toast.present();
  }
}
