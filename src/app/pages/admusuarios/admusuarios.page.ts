import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-admusuarios',
  templateUrl: './admusuarios.page.html',
  styleUrls: ['./admusuarios.page.scss'],
})
export class AdmusuariosPage implements OnInit {
  Cliente: any[] = []
  
  constructor(private bd: BdService) { }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchCliente().subscribe(item => {
          this.Cliente = item;
        })
      }
    })

  }

}
