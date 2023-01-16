import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-perfilclie',
  templateUrl: './perfilclie.page.html',
  styleUrls: ['./perfilclie.page.scss'],
})
export class PerfilcliePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  irADireccion() {

    //Puedo ejecutar otras acciones antes de irme al menu

    this.router.navigate(['/direccion']);


  }



}
