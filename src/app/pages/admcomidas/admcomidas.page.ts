import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';


@Component({
  selector: 'app-admcomidas',
  templateUrl: './admcomidas.page.html',
  styleUrls: ['./admcomidas.page.scss'],
})
export class AdmcomidasPage implements OnInit {

  listaComida: any = [
    {
      id: 1,
      titulo: 'Calpis Uva',
      texto: 'Bebida de origen japonés no carbonatada, La bebida tiene un cierto toque, parecido al de la leche, y ligero sabor ácido, similar al yogur natural con sabor a Uva.',
    },  
  ]
  comida2: any = [
    {
      id: 2,
      titulo: 'Ramen',
      texto: 'El ramen es una sopa cuyos ingredientes principales son los fideos chinos, acompañados de caldo de pollo.que viene acompañado con cerdo asado, cebolla de verdeo, brotes de bambú y huevo.',
    },  

  ]

  constructor(private router: Router, private servicioBD: BdService) { }

  ngOnInit() {
    //subscribirnos al observable el segundo nos ayudara a que se pueda actualizar
    this.servicioBD.dbState().subscribe(res => {
      if (res){
        this.servicioBD.fetchComidas().subscribe(item => {
          this.listaComida = item;
        })
      }
    })
  }

  modificarDatos(x: any){
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id,
        tituloEnviado: x.titulo,
        textoEnviado: x.texto
      }
    }
    this.router.navigate(['/modificarcomida'], navigationExtras);
  }

  eliminarComida(x: any){
    this.servicioBD.eliminarComida(x.id);
  }

}
