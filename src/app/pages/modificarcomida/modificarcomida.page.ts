import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private activeRouter: ActivatedRoute, private bd: BdService) { 
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

  Modificar(){
    this.bd.modificarComida(this.Comida[0].id,this.tituloComida,this.textoComida);
    this.router.navigate(['/admcomidas']);
  }

}
