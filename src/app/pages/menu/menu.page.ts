import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { BdService } from 'src/app/services/bd.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  Comida: any[] = [];

  constructor(public nativeStorage: NativeStorage,private router: Router, private bd: BdService) { }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchComidas().subscribe(item => {
          this.Comida = item;
        })
      }
    })
  }


  EnviarComida(x: any,a: any,b: any,m: any,p: any) {
    this.nativeStorage.setItem('IDComida', x.id);
    this.nativeStorage.setItem('TituComida', a.titulo);
    this.nativeStorage.setItem('TextComida', b.texto);
    this.nativeStorage.setItem('FotoComida', m.foto);
    this.nativeStorage.setItem('CostoComida', p.costo);

    this.router.navigate(['/ramen']);
  }


}