import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comida } from './comida';
import { Usuario } from './usuario';
import { Cliente } from './cliente';
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
  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(idrol INTEGER PRIMARY KEY , nombrerol VARCHAR (30) );";

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(idusuario INTEGER PRIMARY KEY autoincrement, nombre VARCHAR (50), clave VARCHAR (30), foto VARCHAR (150) , correo VARCHAR (50), direccion VARCHAR (75),fk_id_rol INTEGER, FOREIGN KEY(fk_id_rol) REFERENCES rol(idrol));";

  tablaCliente: string = "CREATE TABLE IF NOT EXISTS cliente(idcliente INTEGER PRIMARY KEY autoincrement, nombre VARCHAR (50), clave VARCHAR (30), foto VARCHAR (150) , correo VARCHAR (50), direccion VARCHAR (75),fk_id_rol INTEGER, FOREIGN KEY(fk_id_rol) REFERENCES rol(idrol));";


  tablaComida: string = "CREATE TABLE IF NOT EXISTS comida(id INTEGER PRIMARY KEY autoincrement, foto VARCHAR (150), titulo VARCHAR(50), texto VARCHAR (100),costo INTEGER);";

  //tablaTipoComida: string = "CREATE TABLE IF NOT EXISTS tipocomida(idtipocomida INTEGER PRIMARY KEY autoincrement, nombrecomida VARCHAR (50), descripcioncomida VARCHAR (100));";

  ///////////////////////

  //tablaPedido: string = "CREATE TABLE IF NOT EXISTS pedido(idpedido INTEGER PRIMARY KEY autoincrement, usuario VARCHAR (50), cantidad INTEGER, total INTEGER, fecha DATE);";

  //tablaDetallePedido: string = "CREATE TABLE IF NOT EXISTS detallepedido(iddetallepedido INTEGER PRIMARY KEY autoincrement, cantidad INTEGER);";

  ///////////////////////

  //TablaComuna: string = "CREATE TABLE IF NOT EXISTS comuna (idcomuna INTEGER PRIMARY KEY autoincrement, nombre VARCHAR (70));";

  //variables para datos de inicio en mis tablas 

  insertComida: string = "INSERT OR IGNORE INTO comida(id,foto,titulo,texto,costo) VALUES (1,'assets/Ramen.jpg','Ramen','El ramen es una sopa cuyos ingredientes son fideos chinos, acompañados de caldo de pollo.que viene acompañado con cerdo asado, cebolla de verdeo, brotes de bambú y huevo.',5000);";

  insertComida2: string = "INSERT OR IGNORE INTO comida(id,foto,titulo,texto,costo) VALUES (2,'assets/calpisuva.png','Calpis Uva','Calpis es una bebida de origen japonés no carbonatada, La bebida tiene un cierto toque, parecido al de la leche, y ligero sabor ácido, similar al yogur natural con sabor a Uva',4000);";

  insertComida3: string = "INSERT OR IGNORE INTO comida(id,foto,titulo,texto,costo) VALUES (3,'assets/Anmitsupanda.jpg','Anmitsu','El anmitsu es un dulce japones que esperamos estés encantado de probar, ya que está hecho de pequeños cubos de gelatina, pasta dulce de judías rojas, pastel de arroz, y una variedad de frutas y helado que te encantaran',2000);";

  insertComida4: string = "INSERT OR IGNORE INTO comida(id,foto,titulo,texto,costo) VALUES (4,'assets/Mitarashidango.jpg','Mitarashi Dango','El Mitarashi dango son bolas de masa de arroz a lo cual se le llama Dango los cuales estan ensartadas en pinchos de bambú y cubiertas con un glaseado de salsa de soya dulce.',6500);";

  insertComida5: string = "INSERT OR IGNORE INTO comida(id,foto,titulo,texto,costo) VALUES (5,'assets/Ramunefrutilla.png','Ramune Frutilla','El ramune es un refresco japonés, el cual es una bebida carbonatada envasada en un divertido envase, además de distintos, siendo este de sabor a frutilla.',5200);";

  insertComida6: string = "INSERT OR IGNORE INTO comida(id,foto,titulo,texto,costo) VALUES (6,'assets/okonomiyaki.jpg','Okonomiyaki','El Okonomiyaki es una comida japonesa que consiste en una masa con varios ingredientes cocinados a la plancha. De los cuales están incluidos Huevo, Mayonesa, Alga nori, Salsa okonomi, Carne picada. Creemos que te podría gustar',2600);";

  cliente: string = "INSERT or IGNORE INTO rol(idrol, nombrerol) VALUES (1, 'Cliente');";

  dueno: string = "INSERT or IGNORE INTO rol(idrol, nombrerol) VALUES (2, 'Dueno');";

  usuario1: string = "INSERT or IGNORE INTO usuario(idusuario,nombre,clave,foto,correo,direccion,fk_id_rol) VALUES ( 1, 'Ulises', '12345', 'assets/avatar.png', 'ulise@gmail.com', 'calle norte', 1 );";

  usuario2: string = "INSERT or IGNORE INTO usuario(idusuario,nombre,clave,foto,correo,direccion,fk_id_rol) VALUES ( 2, 'Oliver', '12345', 'assets/avatar.png', 'oliver@gmail.com', 'calle sur', 2 );";

  usuario3: string = "INSERT or IGNORE INTO usuario(idusuario,nombre,clave,foto,correo,direccion,fk_id_rol) VALUES ( 3, 'Ana', '12345', 'assets/avatar.png', 'ana@gmail.com', 'calle este', 1 );";

  cliente1: string = "INSERT or IGNORE INTO cliente(idcliente,nombre,clave,foto,correo,direccion,fk_id_rol) VALUES ( 1, 'Ulises', '12345', 'assets/avatar.png', 'ulise@gmail.com', 'calle norte', 1 );";

  cliente2: string = "INSERT or IGNORE INTO cliente(idcliente,nombre,clave,foto,correo,direccion,fk_id_rol) VALUES ( 3, 'Ana', '12345', 'assets/avatar.png', 'ana@gmail.com', 'calle este', 1 );";
  
  //variable para guardar los registros de cada tabla de BD
  s: Comida[] = [];
  listaComida: BehaviorSubject<Comida[]> = new BehaviorSubject(this.s);

  f: Usuario[] = [];
  listausuario: BehaviorSubject<Usuario[]> = new BehaviorSubject(this.f);

  d: Cliente[] = [];
  listacliente: BehaviorSubject<Cliente[]> = new BehaviorSubject(this.d);
  //observable para manipular el estatus de la BD
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);



  constructor( private toastController: ToastController,private sqlite: SQLite, private platform: Platform, public alerController: AlertController) {
    this.crearBaseDeDatos();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
  
    });
    toast.present();
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

  //Cliente//
  fetchCliente(): Observable<Cliente[]> {
    return this.listacliente.asObservable();
  }



  crearBaseDeDatos() {
    //verificar si la plataforma esta lista  
    this.platform.ready().then(() => {

      //creamos la BD
      this.sqlite.create({
        name: 'prueba178895.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          //llamar a la creacion de Tablas
          this.crearTablas();
        })
        .catch(e => {
          //Muestra el error
          //this.presentAlert("Error en BD: " + e);
        })
    })
      .catch(e => {
        //muestro el error
        //this.presentAlert("Error en Platform: " + e);
      })
  }

  async crearTablas() {
    try {
      //ejecutar creacion de tablas
      await this.database.executeSql(this.tablaRol, []);
      //this.presentAlert("error tabla 3")
      await this.database.executeSql(this.cliente, []);
      //this.presentAlert("error insert 2")
      await this.database.executeSql(this.dueno, []);
      //this.presentAlert("error insert 3")

      await this.database.executeSql(this.tablaComida, []);
      //this.presentAlert("error tabla 1")
      await this.database.executeSql(this.tablaUsuario, []);
      //this.presentAlert("error tabla 2")
      await this.database.executeSql(this.tablaCliente, []);
      
      //ejecutar insert por defecto...

      await this.database.executeSql(this.insertComida, []);
      //this.presentAlert("error insert 1")
      await this.database.executeSql(this.insertComida2, []);
      //this.presentAlert("error insert 1")
      await this.database.executeSql(this.insertComida3, []);
      //this.presentAlert("error insert 1")
      await this.database.executeSql(this.insertComida4, []);
      //this.presentAlert("error insert 1")
      await this.database.executeSql(this.insertComida5, []);
      //this.presentAlert("error insert 1")
      await this.database.executeSql(this.insertComida6, []);
      //this.presentAlert("error insert 1")
      
      await this.database.executeSql(this.usuario1, []);
      //this.presentAlert("error insert 4")
      await this.database.executeSql(this.usuario2, []);
      //this.presentAlert("error insert 5")
      await this.database.executeSql(this.cliente1, []);
      //this.presentAlert("error insert 4")
      await this.database.executeSql(this.cliente2, []);
      //this.presentAlert("error insert 5")

      await this.database.executeSql(this.usuario3, []);
      //this.presentAlert("error insert 6")

      //llamar al metodo para select de mi tabla principal
      this.buscarComidas();
      //this.presentAlert("error comida")

      this.buscarUsuario();
      //this.presentAlert("error usuario")
      this.buscarCliente();
      //modificar el observable de la BD lista
      this.isDBReady.next(true);
      //this.presentAlert("todo bien")

    } catch (e) {
      //this.presentAlert("Error en Tablas: " + e);
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
            foto: res.rows.item(i).foto,
            titulo: res.rows.item(i).titulo,
            texto: res.rows.item(i).texto,
            costo: res.rows.item(i).costo
          })
        }
      }
      //actualizamos el observable
      this.listaComida.next(items);
    })
  }

  buscarCliente() {
    return this.database.executeSql('SELECT * FROM cliente', []).then(res => {
      //variable para almacenar informacion
      let items: Cliente[] = [];
      //verifica la cantidad de fila que se genere
      if (res.rows.length > 0) {
        //recorre el resulset para guardar en la lista
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idcliente: res.rows.item(i).idcliente,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            foto: res.rows.item(i).foto,
            correo: res.rows.item(i).correo,
            direccion: res.rows.item(i).direccion,
            fk_id_rol: res.rows.item(i).fk_id_rol
          });
        }
      }
      //actualizamos el observable
      this.listacliente.next(items);
    })
  }

  buscarComidasId(id: number) {
    //realizamos la consulta a la BD
    let data = [id];
    return this.database.executeSql('SELECT * FROM comida WHERE id = ?', data).then(res => {
      let items: Comida[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            foto: res.rows.item(i).foto,
            titulo: res.rows.item(i).titulo,
            texto: res.rows.item(i).texto,
            costo: res.rows.item(i).costo
          });
        }
      }
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


  agregarUsuario(nombre: string, correo: string,foto: string,direccion: string, clave: string, fk_id_rol: number = 1) {
    let data = [nombre, clave, foto, correo, direccion , fk_id_rol,];
    return this.database.executeSql('INSERT INTO usuario ( nombre, clave, foto, correo, direccion, fk_id_rol,) VALUES (?, ?, ?, ?, ?, ?)', data).then(res => {
      this.buscarUsuario();
      this.presentToast("Cuenta Creada Exitosamente");
    });
  }

  agregarCliente(nombre: string, correo: string,foto: string,direccion: string, clave: string, fk_id_rol: number = 1) {
    let data = [nombre, clave, foto, correo, direccion , fk_id_rol,];
    return this.database.executeSql('INSERT INTO cliente ( nombre, clave, foto, correo, direccion, fk_id_rol,) VALUES (?, ?, ?, ?, ?, ?)', data).then(res => {
      this.buscarCliente();
    });
  }

  //modificar la imagen de usuarios 
  modificarUsuarioImg(idusuario: number, imagen: any) {
    let data = [imagen, idusuario];
    return this.database.executeSql('UPDATE usuario SET foto = ? WHERE idusuario = ?', data).then(data2 => {
      this.buscarUsuario();
      this.presentToast('Imagen guardada')
    })
  }

  modificarClienteImg(idcliente: number, imagen: any) {
    let data = [imagen, idcliente];
    return this.database.executeSql('UPDATE cliente SET foto = ? WHERE idcliente = ?', data).then(data2 => {
      this.buscarCliente();
    })
  }

  modificarComidaImg(id: number, imagen: any) {
    let data = [imagen, id];
    return this.database.executeSql('UPDATE comida SET foto = ? WHERE id = ?', data).then(data2 => {
      this.buscarComidas();
      this.presentToast('Imagen guardada')
    })
  }


  updateUsuario(idusuario: number, nombre: string) {
    let data = [nombre, idusuario];
    return this.database.executeSql('UPDATE usuario SET nombre = ?  WHERE idusuario = ? ', data).then(res => {
      this.buscarUsuario();
    });
  }

  updateCliente(idcliente: number, nombre: string) {
    let data = [nombre, idcliente];
    return this.database.executeSql('UPDATE cliente SET nombre = ?  WHERE idcliente = ? ', data).then(res => {
      this.buscarCliente();
    });
  }

  updateUsuarioclave(idusuario: number, clave: string) {
    let data = [clave, idusuario];
    return this.database.executeSql('UPDATE usuario SET clave = ?  WHERE idusuario = ? ', data).then(res => {
      this.buscarUsuario();
    });
  }

  //revisar por arreglo

  insertarComida(titulo: string, texto: string, costo: number = 0 ,foto: any) {
    let data = [foto, titulo, texto, costo];
    return this.database.executeSql('INSERT INTO comida(foto,titulo,texto,costo) VALUES (?,?,?,?)', data).then(res => {
      this.buscarComidas();
      this.presentToast("Comida Registrada");
    })
  }

  //modificar la comida
  modificarComida(id: number, titulo: string, texto: string, costo: number = 0) {
    let data = [titulo,texto,costo,id];
    return this.database.executeSql('UPDATE comida SET titulo= ?,texto= ?,costo= ? WHERE id = ?', data).then(res2 => {
      this.buscarComidas();
      this.presentToast("Comida Modificada");
    })
  }

  //eliminar comidas 
  eliminarComida(id: number) {
    return this.database.executeSql('DELETE FROM comida WHERE id = ?', [id]).then(e => {
      this.buscarComidas();
      this.presentToast("Comida Eliminada");
    })
  }



  // tratar de arreglar registro
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
