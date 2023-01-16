import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.page.html',
  styleUrls: ['./nombre.page.scss'],
})
export class NombrePage implements OnInit {

  nombremod = '';
  nombremod2 = '';

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

  modificarnombre() {
    if (this.nombremod != this.nombremod2 ) {
      this.bd.presentAlert("Nombres no iguales ")
    }
    else if (this.nombremod.length == 0 && this.nombremod2.length == 0){
      this.bd.presentAlert("Ingrese Nombre")
    }
    else if (this.nombremod == this.nombremod2 && this.nombremod.length != 0) {
      this.bd.presentAlert("Nombre cambiado")
      this.bd.updateUsuario(this.Usuario[0].idusuario, this.nombremod)
      this.router.navigate(['/configuracion']);
    }
  }

  
}
