import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'admcomidas',
    pathMatch: 'full'
  },
  
  {
    path: 'sesion',
    loadChildren: () => import('./pages/sesion/sesion.module').then( m => m.SesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'perfilclie',
    loadChildren: () => import('./pages/perfilclie/perfilclie.module').then( m => m.PerfilcliePageModule)
  },
  {
    path: 'perfildue',
    loadChildren: () => import('./pages/perfildue/perfildue.module').then( m => m.PerfilduePageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'calpis',
    loadChildren: () => import('./pages/calpis/calpis.module').then( m => m.CalpisPageModule)
  },
  {
    path: 'anmitsu',
    loadChildren: () => import('./pages/anmitsu/anmitsu.module').then( m => m.AnmitsuPageModule)
  },
  {
    path: 'mitarashi',
    loadChildren: () => import('./pages/mitarashi/mitarashi.module').then( m => m.MitarashiPageModule)
  },
  {
    path: 'okonomiyaki',
    loadChildren: () => import('./pages/okonomiyaki/okonomiyaki.module').then( m => m.OkonomiyakiPageModule)
  },
  {
    path: 'ramen',
    loadChildren: () => import('./pages/ramen/ramen.module').then( m => m.RamenPageModule)
  },
  {
    path: 'ramune',
    loadChildren: () => import('./pages/ramune/ramune.module').then( m => m.RamunePageModule)
  },

  {
    path: 'tarjeta',
    loadChildren: () => import('./pages/tarjeta/tarjeta.module').then( m => m.TarjetaPageModule)
  },

  {
    path: 'admusuarios',
    loadChildren: () => import('./pages/admusuarios/admusuarios.module').then( m => m.AdmusuariosPageModule)
  },

  {
    path: 'admcomidas',
    loadChildren: () => import('./pages/admcomidas/admcomidas.module').then( m => m.AdmcomidasPageModule)
  },


  {
    path: 'agregarcomida',
    loadChildren: () => import('./pages/agregarcomida/agregarcomida.module').then( m => m.AgregarcomidaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  }, 
  {
    path: 'cambiocontra',
    loadChildren: () => import('./pages/cambiocontra/cambiocontra.module').then( m => m.CambiocontraPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
    {
    path: 'nombre',
    loadChildren: () => import('./pages/nombre/nombre.module').then( m => m.NombrePageModule)
  },
  {
    path: 'contraper',
    loadChildren: () => import('./pages/contraper/contraper.module').then( m => m.ContraperPageModule)
  },
    {
    path: 'modificarcomida',
    loadChildren: () => import('./pages/modificarcomida/modificarcomida.module').then( m => m.ModificarcomidaPageModule)
  },
  {
    path: 'fotoperfil',
    loadChildren: () => import('./pages/fotoperfil/fotoperfil.module').then( m => m.FotoperfilPageModule)
  }, 

  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },
 

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
