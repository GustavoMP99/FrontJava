import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-code-complete',
  templateUrl: './code_complete.component.html',
  styleUrls: ['./code_complete.component.css']
})
export class CodeCompleteComponent implements OnInit {

  constructor( private data: DataService ) { }

  ngOnInit() {
  }

  /**
   * Función para llamar todoel código
   */
  allCode(text){
    console.log("text: ", text);
    if(text == ""){
      alert("Antes de correr, escribe tu código")
      return;
    }
    
    this.data.sendAllCode(text).subscribe(data => {
      console.log( data );
      let respuesta = data[0]; 
      console.log(respuesta);
      
    });
  }
}
