import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ToastController } from '@ionic/angular';
//import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-modificarcomida',
  templateUrl: './modificarcomida.page.html',
  styleUrls: ['./modificarcomida.page.scss'],
})
export class ModificarcomidaPage implements OnInit {

  Comida: any[] = []

  tituloComida ="";
  textoComida ="";
  costoComida: any;
  idextras: any = 0;

  constructor(public nativeStorage: NativeStorage,private router: Router,private activedRouter: ActivatedRoute, private bd: BdService,private toastController: ToastController) { 
this.GetID()
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
    this.nativeStorage.getItem('IDenviado').then((data)=>{
      //this.presentAlert1(data);
      this.idextras = data
   })
  }

  Modificarfoto(){
    this.router.navigate(['/fotocomida']);
  }
    //this.nativeStorage.setItem('ComidaId', this.Comida[0].id);
    

  Modificar(){
    this.bd.modificarComida(this.idextras,this.tituloComida,this.textoComida, this.costoComida);
    this.presentToast("Se ha modificado la comida con exito");
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
