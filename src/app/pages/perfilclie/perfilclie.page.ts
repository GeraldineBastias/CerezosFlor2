import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-perfilclie',
  templateUrl: './perfilclie.page.html',
  styleUrls: ['./perfilclie.page.scss'],
})
export class PerfilcliePage implements OnInit {
  Usuario: any[] = []

  constructor(private router : Router, private bd: BdService) { }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item;
        })
      }
    })
  }

}
