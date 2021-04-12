import { Injectable, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Persona{
  id:number;
  name:String;
  apellidos:String
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiRout = "http://localhost:8080/backendJava/personas"



  constructor(private response: HttpClient) { }
  
  ngOnInit() { }


  /**
   * Retrona: La cantidad de registros asociados a este departamento.
   * @param value 
   */
   getUsers(){
    return this.response.get(this.apiRout)
  }


  sendAllCode(code){
    return this.response.post(this.apiRout, code); 
  }




  /**
   * Retrona: La cantidad de registros asociados a este departamento.
   * @param value 
   */
  getPagDepa(value){
    return this.response.get(this.apiRout+'tiquetes/consulta/departamento/paginas?DEPARTAMENTO='+value);
  }

  /**
   * Delete. Elimina todos los tiquetes de un determinado departamento.
   */
  deleteByDepartament(value){
    return this.response.delete(this.apiRout+'tiquetes/eliminar/departamento?DEPARTAMENTO='+value, {observe: 'response'})
  }

  /**
   * POST para insertar tiquetes.
   * Parámetro: JS con los datos a insertar.
   * Retorna: Código del estado de la inserción.
   * @param value
   */
  postTickets(value){
    return this.response.post(this.apiRout+'tiquetes/insertar/', value, {observe: 'response'});
  }

  /**
   * Editar un tiquete.
   * @param value JSON con la info.
   */
  modifyTickets(value){
    return this.response.put(this.apiRout+'tiquetes/modificar/', value, {observe: 'response'});
  }

  /**
   * Crear un menú.
   * @param value Json con la info.
   */
  createMenu(value){
    return this.response.post(this.apiRout + 'menu/insertarMenuAlimentos/', value, {observe: 'response'}); 
  }



  /**
   * Editar un menú.
   * @param value JSON con la info.
   */
  modifyMenu(value){
    return this.response.put(this.apiRout+'menu/editarAlimentos/', value , {observe: 'response'});
  }

  /**
   * Función para el filtro de buscar aliment
   * @param nameFood 
   * @param active 
   */

  

  /**
   * POST para insertar tiquetes
   * @param value: JSON con la informacion del usuario a insertar
   */
  insertarUsuario(value: object) {
    return this.response.post(this.apiRout + 'users/insertarUsuario', value);
  }

  /**
   * POST para modificar usuarios
   * @param value: JSON con la informacion del usuario a modificar
   */
  public modifyUser(params): Observable<any> {
    return this.response.put(this.apiRout + 'users/modificarUsuario',params,{observe: "response"});
}  

}
