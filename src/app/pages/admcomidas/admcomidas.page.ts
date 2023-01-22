import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';


@Component({
  selector: 'app-admcomidas',
  templateUrl: './admcomidas.page.html',
  styleUrls: ['./admcomidas.page.scss'],
})
export class AdmcomidasPage implements OnInit {

  Comida: any[] = [];

  constructor(private router: Router, private bd: BdService) { }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchComidas().subscribe(item => {
          this.Comida = item;
        })
      }
    })
  }

  modificarDatos(id: number = 0) {
    let navigationExtras: NavigationExtras = {
      state: {
        IDenviado: id,
      }
    }
    this.router.navigate(['/modificarcomida'], navigationExtras);
  }
  

  eliminarComida(x: any) {
    this.bd.eliminarComida(x.id);
  }

}
