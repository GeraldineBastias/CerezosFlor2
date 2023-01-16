import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private activedRouter: ActivatedRoute,private router: Router) {}

  salir(){
    this.router.navigate(['/sesion'])
  }

}
