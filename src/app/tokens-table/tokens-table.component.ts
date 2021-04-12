import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


export interface PeriodicElement {
  token: string;
  valor: number;
}

const ELEMENT_DATA: PeriodicElement[] = [ ];
@Component({
  selector: 'app-tokens-table',
  templateUrl: './tokens-table.component.html',
  styleUrls: ['./tokens-table.component.css']
})
export class TokensTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  
  
  constructor(private data:DataService) { }

  ngOnInit() { }

  showVar():void {
    console.log(this.data.tokensList.length);
    if(this.data.tokensList.length == 0){
      alert("No se han creado variables. ¡Escribe tu código!")
      return;
    }
    
    this.dataSource =this.data.tokensList;
    
  }

  /**
   * Limpiar la lista de tokens.
   */
  clearVar():void{
    this.data.tokensList=[];
    this.dataSource =this.data.tokensList;

  }  
}
