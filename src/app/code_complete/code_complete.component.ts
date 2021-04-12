import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-code-complete',
  templateUrl: './code_complete.component.html',
  styleUrls: ['./code_complete.component.css']
})
export class CodeCompleteComponent implements OnInit {

  constructor( private data: DataService ) { }

  ngOnInit() { }

  /**
   * Función para llamar todo el código
   */
  allCode(text): void{
    
    console.log("text: ", text);
    if(text == ""){
      alert("Antes de correr, escribe tu código")
      return;
    }
    this.data.tokensList=[];
    this.data.sendAllCode(text).subscribe(data => {
      var res= data.toString;
      //console.log( data[0][0] );
      this.getError(res);
      
      
      /* Recorrer la respuesta. */
      let cont: number=0;
      while(true){
        
        if(data[cont] == undefined){
          break;
        }
        else{
          var d = data[cont];
          var splited = d.toString().split('"');
          
          
          var t = splited[3];
          var v;
          if(t=="STRINGLITERAL")
            v = splited[8]
          
          else
            v = splited[7]
        
          if(v=="Error"){
            alert("asd");
            return;
          }
          else{
            //Cambiar unicode a caracter.
            if(t!="EOF"){
              if(t=='EQUAL')
                this.data.tokensList.push({'token': t, 'valor': '='});
              else if(t=="IDENTICAL")
                this.data.tokensList.push({'token': t, 'valor': '=='});
              else if(t=="DIF")
                this.data.tokensList.push({'token': t, 'valor': '!='});
              else
                this.data.tokensList.push({'token': t, 'valor': v});
            }
            cont++;
          }

        }
      }      
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
