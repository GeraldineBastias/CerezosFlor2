import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comida } from './comida';
import { Usuario } from './usuario';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  sesion(nombre: any, clave: any) {
    throw new Error('Method not implemented.');
  }

  //crear una variable para mi BD
  public database: SQLiteObject = new SQLiteObject(null);

  //variables para las tablas/ agregar la imagen en la tabla de comida

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(idusuario INTEGER PRIMARY KEY autoincrement, nombre VARCHAR (25), clave VARCHAR (15), foto BLOB , correo VARCHAR (50), direccion VARCHAR (75),fk_id_rol INTEGER, FOREIGN KEY(fk_id_rol) REFERENCES rol(idrol));";

  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(idrol INTEGER PRIMARY KEY , nombrerol VARCHAR (30) );";

  tablaComida: string = "CREATE TABLE IF NOT EXISTS comida(id INTEGER PRIMARY KEY autoincrement, titulo VARCHAR(50), texto VARCHAR (100), fk_id_tipocomida INTEGER, FOREIGN KEY(fk_id_tipocomida) REFERENCES comida(idtipocomida));";

  //tablaTipoComida: string = "CREATE TABLE IF NOT EXISTS tipocomida(idtipocomida INTEGER PRIMARY KEY autoincrement, nombrecomida VARCHAR (50), descripcioncomida VARCHAR (100));";

  ///////////////////////

  //tablaPedido: string = "CREATE TABLE IF NOT EXISTS pedido(idpedido INTEGER PRIMARY KEY autoincrement, usuario VARCHAR (50), cantidad INTEGER, total INTEGER, fecha DATE);";

  //tablaDetallePedido: string = "CREATE TABLE IF NOT EXISTS detallepedido(iddetallepedido INTEGER PRIMARY KEY autoincrement, cantidad INTEGER);";

  ///////////////////////

  //TablaComuna: string = "CREATE TABLE IF NOT EXISTS comuna (idcomuna INTEGER PRIMARY KEY autoincrement, nombre VARCHAR (70));";

  //variables para datos de inicio en mis tablas
  insertComida: string = "INSERT OR IGNORE INTO comida(id,titulo,texto) VALUES (2,'Ramen','El ramen es una sopa cuyos ingredientes son fideos chinos, acompañados de caldo de pollo.que viene acompañado con cerdo asado, cebolla de verdeo, brotes de bambú y huevo.');";

  cliente: string = "INSERT or IGNORE INTO rol(idrol, nombrerol) VALUES (1, 'Cliente');";

  dueno: string = "INSERT or IGNORE INTO rol(idrol, nombrerol) VALUES (2, 'Dueno');";

  usuario1: string = "INSERT or IGNORE INTO usuario(idusuario,nombre,clave,correo,direccion,fk_id_rol) VALUES ( 1, Ulises, 12345, ulise@gmail.com, calle norte, 1 );";

  //variable para guardar los registros de cada tabla de BD
  s: Comida[] = [];
  listaComida: BehaviorSubject<Comida[]> = new BehaviorSubject(this.s);

  f: Usuario[] = [];
  listausuario: BehaviorSubject<Usuario[]> = new BehaviorSubject(this.f);
  //observable para manipular el estatus de la BD
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);



  constructor(private sqlite: SQLite, private platform: Platform, public alerController: AlertController) {
    this.crearBaseDeDatos();
  }


  async presentAlert(msj: string) {
    const alert = await this.alerController.create({
      header: 'Alert',
      subHeader: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  //metodo que indique el estado de la BD
  dbState() {
    return this.isDBReady.asObservable();
  }

  //funcion para retornar la listas de los select como observable
  fetchComidas(): Observable<Comida[]> {
    return this.listaComida.asObservable();
  }

  //USUARIO//
  fetchUser(): Observable<Usuario[]> {
    return this.listausuario.asObservable();
  }



  crearBaseDeDatos() {
    //verificar si la plataforma esta lista  
    this.platform.ready().then(() => {

      //creamos la BD
      this.sqlite.create({
        name: 'delip.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          //llamar a la creacion de Tablas
          this.crearTablas();
        })
        .catch(e => {
          //Muestra el error
          this.presentAlert("Error en BD: " + e);
        })
    })
      .catch(e => {
        //muestro el error
        this.presentAlert("Error en Platform: " + e);
      })
  }

  async crearTablas() {
    try {
      //ejecutar creacion de tablas
      await this.database.executeSql(this.tablaComida, []);
      this.presentAlert("error tabla 1")
      await this.database.executeSql(this.tablaUsuario, []);
      this.presentAlert("error tabla 2")
      await this.database.executeSql(this.tablaRol, []);
      this.presentAlert("error tabla 3")

      //ejecutar insert por defecto
      await this.database.executeSql(this.insertComida, []);
      this.presentAlert("error insert 1")
      await this.database.executeSql(this.cliente, []);
      this.presentAlert("error insert 2")
      await this.database.executeSql(this.dueno, []);
      this.presentAlert("error insert 3")
      //await this.database.executeSql(this.usuario1, []);
      this.presentAlert("error insert 4")
      //llamar al metodo para select de mi tabla principal
      this.buscarComidas();
      this.presentAlert("error comida")

      this.buscarUsuario();
      this.presentAlert("error usuario")
      //modificar el observable de la BD lista
      this.isDBReady.next(true);
      this.presentAlert("todo bien")
    } catch (e) {
      this.presentAlert("Error en Tablas: " + e);
    }
  }

  buscarComidas() {
    return this.database.executeSql('SELECT * FROM comida', []).then(res => {
      //variable para almacenar informacion
      let items: Comida[] = [];
      //verifica la cantidad de fila que se genere
      if (res.rows.length > 0) {
        //recorre el resulset para guardar en la lista
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            titulo: res.rows.item(i).titulo,
            texto: res.rows.item(i).texto
          })
        }
      }
      //actualizamos el observable
      this.listaComida.next(items);
    })
  }


  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idusuario: res.rows.item(i).idusuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            foto: res.rows.item(i).foto,
            correo: res.rows.item(i).correo,
            direccion: res.rows.item(i).direccion,
            fk_id_rol: res.rows.item(i).fk_id_rol
          });
        }
      }
      this.listausuario.next(items);
    });
  }


  agregarUsuario2(idusuario: number, nombre: string, correo: string, clave: string, fk_id_rol: number = 1) {
    let data = [idusuario, nombre, correo, clave, fk_id_rol,];
    return this.database.executeSql('INSERT or IGNORE INTO  usuario (idusuario, nombre, correo, clave, fk_id_rol,) VALUES (?, ?, ?, ?, ?)', data).then(res => {
      this.buscarUsuario();
    });
  }

  agregarUsuario(idusuario: number, nombre: string,  clave: string,  fk_id_rol: number = 1) {
    let data = [idusuario, nombre, clave, fk_id_rol];
    return this.database.executeSql('INSERT or IGNORE INTO  usuario (idusuario, nombre, clave, fk_id_rol) VALUES (?, ?, ?, ?)', data).then(res => {
      this.buscarUsuario();
    });
  }

  //modificar la imagen de usuarios
  modificarUsuarioImg(idusuario: number, imagen: any) {
    let data = [imagen, idusuario];
    return this.database.executeSql('UPDATE usuario SET foto = ? WHERE idusuario = ?', data).then(data2 => {
      this.buscarUsuario();
      this.presentAlert('Imagen guardada')
    })
  }

  updateUsuario(idusuario: number, nombre: string) {
    let data = [nombre, idusuario];
    return this.database.executeSql('UPDATE usuario SET nombre = ?  WHERE idusuario = ? ', data).then(res => {
      this.buscarUsuario();
    });
  }

  updateUsuarioclave(idusuario: number, clave: string) {
    let data = [clave, idusuario];
    return this.database.executeSql('UPDATE usuario SET clave = ?  WHERE idusuario = ? ', data).then(res => {
      this.buscarUsuario();
    });
  }

  //agregar este en el ts de agregarcomida
  insertarComida(titulo: string, texto: string) {
    let data = [titulo, texto];
    //agregar la foto 
    return this.database.executeSql('INSERT INTO comida(titulo,texto) VALUES (?,?)', data).then(res => {
      this.buscarComidas();
      this.presentAlert("Comida Registrada");
    })
  }
  //agregar la foto
  modificarComida(id: number, titulo: string, texto: string) {
    let data = [titulo, texto, id];
    return this.database.executeSql('UPDATE comida SET titulo= ?,texto= ? WHERE id = ?', data).then(res2 => {
      this.buscarComidas();
      this.presentAlert("Comida Modificada");
    })
  }
  //eliminar comidas
  eliminarComida(id: number) {
    return this.database.executeSql('DELETE FROM comida WHERE id = ?', [id]).then(e => {
      this.buscarComidas();
      this.presentAlert("Comida fue Eliminada");
    })
  }


  login(nombre: string, clave: string) {
    let data = [nombre, clave]
    return this.database.executeSql('SELECT * FROM usuario WHERE nombre=? AND clave=? ', data).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idusuario: res.rows.item(i).idusuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            foto: res.rows.item(i).foto,
            correo: res.rows.item(i).correo,
            direccion: res.rows.item(i).direccion,
            fk_id_rol: res.rows.item(i).fk_id_rol
          });
        }

      }
      this.listausuario.next(items);
    });
  }

}
