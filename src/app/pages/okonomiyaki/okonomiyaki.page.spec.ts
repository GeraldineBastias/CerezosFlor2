import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Usuario } from '../../services/usuario';
import { OkonomiyakiPage } from './okonomiyaki.page';

describe('OkonomiyakiPage', () => {
  let component: OkonomiyakiPage;
  let fixture: ComponentFixture<OkonomiyakiPage>;
  let pipe: OkonomiyakiPage;
  let testPerson: Usuario;

  beforeEach((() => {
    pipe = new OkonomiyakiPage();
    testPerson = {
      idusuario: 1,
      nombre:'Francisca',
      clave: '12345',
      foto: ' ',
      correo:'francisca@gmail.com',
      direccion:'calle este',
      fk_id_rol: 1, 
    };
  }));

  it('Existe los datos dentro de la lista', () => {
    expect(pipe).toBeTruthy();
  });

  it('Deberia devolver en los Usuarios el nombre "Francisca" con ID 1', () => {
    expect(pipe).toBeTruthy(testPerson.nombre.length);
  });

  it('Deberia devolver en los Usuarios el correo "francisca@gmail.com" con ID 1', () => {
    expect(pipe).toBeTruthy(testPerson.correo.length);
  });

});
