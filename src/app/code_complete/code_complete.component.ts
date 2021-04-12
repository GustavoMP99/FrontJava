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
   * Función para llamar todo el código
   */
  allCode(text){
    console.log("text: ", text);
    if(text == ""){
      alert("Antes de correr, escribe tu código")
      return;
    }
    
    this.data.sendAllCode(text).subscribe(data => {
      var res= data.toString;
      //console.log( data[0][0] );
      this.getError(res);
      
      
    });
  }
getError(text){
  if(text.includes("Error")){
    var res = text.split(":");
    let string = res[1]+res[2]+res[3];
    //console.log(string);
  }
}
}
