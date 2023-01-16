import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-modificarcomida',
  templateUrl: './modificarcomida.page.html',
  styleUrls: ['./modificarcomida.page.scss'],
})
export class ModificarcomidaPage implements OnInit {

  tituloComida ="";
  textoComida ="";
  id=0;

  constructor(private router: Router, private activeRouter: ActivatedRoute, private servicioBD: BdService) { 
    this.activeRouter.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.id = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.textoComida = this.router.getCurrentNavigation()?.extras?.state?.['textoEnviado'];
        this.tituloComida = this.router.getCurrentNavigation()?.extras?.state?.['titulo'];
      }
    })
  }

  ngOnInit() {
  }

  Modificar(){
    this.servicioBD.modificarComida(this.id,this.tituloComida,this.textoComida);
    this.router.navigate(['/admcomidas']);
  }

}
