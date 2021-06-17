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
  
  show:boolean=true;

  info:string;
  
  constructor(private data:DataService) { }

  ngOnInit() { }

  showInfo(){
    return this.data.dataList;
  }

}
