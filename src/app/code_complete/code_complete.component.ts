import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-code-complete',
  templateUrl: './code_complete.component.html',
  styleUrls: ['./code_complete.component.css']
})
export class CodeCompleteComponent implements OnInit {
  resultado=[];

  constructor( private data: DataService,  private alert:AlertService ) { }

  ngOnInit() { }

  /**
   * Función para llamar todo el código
   */
  allCode(text): void{
    console.log("text: ", text);
     

    if(text == ""){
      alert("Antes de presiona el botón, escribe tu código")
      return;
    }

    this.resultado = [];
    this.data.sendAllCode(text).subscribe((data:  Object[]) => {
      console.log(data)

      /* Recorrer la respuesta. */
      data.forEach(element => {
        console.log(element);
        if(String(element).includes("ERROR")){
          this.getError(String(element));
        }
        else{
          this.resultado.push(String(element))
          //this.alert.success(String(element));
        }
      });
      this.data.dataList = this.resultado;



      /*
      
      let cont: number=0;
      while(cont){
        if(data == null){
          alert("Intente de nuevo, hubo un error.")
          break;
        }
        
        if(data[cont] == undefined){
          break;
        }
        else{
          var d = data[cont];
          console.log(d);
          this.alert.success(d);
          cont++;
          
          var splited = d.toString().split('"');
          
          
          var t = splited[3];
          var v;
          if(t=="STRINGLITERAL")
            v = splited[8]
          
          else
            v = splited[7]
        
          
          if(splited.length==1){
            this.getError(splited[0]);   
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
            
          }
        }
      } */
      
    });
  }
  getError(text: string){
    console.log(text);
    this.alert.error(text)

  }
}
