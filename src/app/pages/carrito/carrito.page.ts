import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  transform(value: string) {
    return value.split(' ').slice(0, 2).join(' ') + '...';
  }

  constructor() { }

  ngOnInit() {
  }

}
