import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { BdService } from 'src/app/services/bd.service';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-fotocomida',
  templateUrl: './fotocomida.page.html',
  styleUrls: ['./fotocomida.page.scss'],
})
export class FotocomidaPage implements OnInit {
  foto: any = 0;

  Comida: any[] = []
  
  constructor(private router: Router, private camara: Camera, private camera: CameraService, private bd: BdService) { }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchComidas().subscribe(item => {
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

  Tomarfoto() {
    this.camera.Camera();
    this.foto = this.camera.image;
  }


  Galeria() {
    this.camera.Galery();
    this.foto = this.camera.image;
  }

  Guardar(){
    this.bd.modificarComidaImg(this.Comida[0].id,this.foto);
    this.router.navigate(['/admcomidas']);
  }
  }
