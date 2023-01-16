import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-contraper',
  templateUrl: './contraper.page.html',
  styleUrls: ['./contraper.page.scss'],
})
export class ContraperPage implements OnInit {

  clavemod = '';
  clavemod2 = '';

  Usuario: any[] = []
  constructor(private bd: BdService, private router: Router) { }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item;
        })
      }
    })
  }

  
  modificarclave() {
    if (this.clavemod != this.clavemod2 ) {
      this.bd.presentAlert("Claves no iguales ")
    }
    else if (this.clavemod.length == 0 && this.clavemod2.length == 0){
      this.bd.presentAlert("Ingrese clave nueva ")
    }
    else if (this.clavemod == this.clavemod2 && this.clavemod.length != 0) {
      this.bd.presentAlert("Claves cambiada")
      this.bd.updateUsuarioclave(this.Usuario[0].idusuario, this.clavemod)
      this.router.navigate(['/configuracion']);
      
    }

  }

}

