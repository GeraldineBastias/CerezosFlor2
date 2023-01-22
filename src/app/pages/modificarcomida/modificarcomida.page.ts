import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
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
  costoComida: any = 0;
  idextras: any = 0;
  constructor(public nativeStorage: NativeStorage,private router: Router,private activedRouter: ActivatedRoute, private bd: BdService) { 
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
    let navigationExtras: NavigationExtras = {
      state: {
        idenviado: this.idextras
      }
    }
    this.router.navigate(['/fotocomida'], navigationExtras);
  }
    //this.nativeStorage.setItem('ComidaId', this.Comida[0].id);
    

  Modificar(){
    this.bd.modificarComida(this.idextras,this.tituloComida,this.textoComida, this.costoComida);
    this.router.navigate(['/admcomidas']);
  }

}
