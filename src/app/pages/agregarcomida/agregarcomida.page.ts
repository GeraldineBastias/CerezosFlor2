import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-agregarcomida',
  templateUrl: './agregarcomida.page.html',
  styleUrls: ['./agregarcomida.page.scss'],
})
export class AgregarcomidaPage implements OnInit {

  tituloComida: string ="";
  textoComida: string ="";

constructor(private router: Router, private servicioBD: BdService) {}

  ngOnInit() {
  }
  Guardar(){
    this.servicioBD.insertarComida(this.tituloComida,this.textoComida);
    this.router.navigate(['/admcomidas']);
  }

}
