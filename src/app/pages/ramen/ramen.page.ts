import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ramen',
  templateUrl: './ramen.page.html',
  styleUrls: ['./ramen.page.scss'],
})
export class RamenPage implements OnInit {
  food: any;
  Comida: any[] = [];

  constructor(private router: Router, private bd: BdService, private toastController: ToastController) { }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchComidas().subscribe(item => {
          this.Comida = item;
        })
      }
    })
  }

  anadir(){
    this.presentToast("El " + this.Comida[0].titulo + " se ha añadido al pedido");
    this.router.navigate(['/menu']);
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
  
    });
    toast.present();
  }
  
}
