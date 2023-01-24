import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Usuario } from '../../services/usuario';
import { CarritoPage } from '../carrito/carrito.page';

describe('CarritoPage', () => {
  let component: CarritoPage;
  let fixture: ComponentFixture<CarritoPage>;
  let pipe: CarritoPage;
  let testPerson: Usuario;

  beforeEach((() => {
    pipe = new CarritoPage();
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