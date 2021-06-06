import { Injectable, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiRout = "http://localhost:8080/backendJava/compilador"


  constructor(private response: HttpClient) { }
  
  ngOnInit() { }

  tokensList = [];

  /**
   * Función que conecta con el backend.
   * @param code Codigo a compilar.
   * @returns 
   */
  sendAllCode(code){
    return this.response.post(this.apiRout, code); 
  }


}
