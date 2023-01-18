import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { BdService } from 'src/app/services/bd.service';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-agregarcomida',
  templateUrl: './agregarcomida.page.html',
  styleUrls: ['./agregarcomida.page.scss'],
})
export class AgregarcomidaPage implements OnInit {

  tituloComida: string ="";
  textoComida: string ="";
  foto: any;
  Comida: any [] = [];

constructor(private router: Router, private bd: BdService, private camera: CameraService, private camara: Camera) {}

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Comida = item;
        })
      }
    })
    this.camera.fetchImage().subscribe(item=>{
      this.foto = item;
    })
    this.camera.obser.subscribe((res: any[]) =>{
      this.foto = res;
      console.log(res[0]);
    },(error: any) =>{
      console.log(error);
    });
  }
  Galeria() {
    this.camera.Galery();
    this.foto = this.camera.image;
  }

  Guardar(){
    this.bd.modificarUsuarioImg(this.Comida[0].idcomida,this.foto);
    this.router.navigate(['/admcomidas']);
  }
}
