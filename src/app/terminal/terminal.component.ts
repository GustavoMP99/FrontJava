import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgTerminal, NgTerminalComponent } from 'ng-terminal';
import { FormControl } from '@angular/forms';
import { DisplayOption } from 'ng-terminal';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Terminal } from 'xterm';
import { FunctionsUsingCSI } from 'ng-terminal';
import { DataService } from '../data.service';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})

export class TerminalComponent implements OnInit, AfterViewInit {

  title = 'Terminal';
  color = 'accent';
  bool = false;
  
  public resizable: boolean;
  public fixed = false;

  disabled = false;
  rowsControl = new FormControl();
  colsControl = new FormControl();
  inputControl = new FormControl();

  displayOption: DisplayOption = {};
  displayOptionBounded: DisplayOption = {};//now it's not used
  underlying: Terminal;

  @ViewChild('term', {static: false}) child: NgTerminal;

  constructor( private data: DataService) { }

  ngOnInit() {
    this.rowsControl.setValue(10);
    this.colsControl.setValue(40);
  }

  ngAfterViewInit() {
    var string ="";
    this.underlying = this.child.underlying;
    this.underlying.setOption("fontSize", 22);
    this.invalidate();    
    this.child.write('PseudoJava REPL Grammar');
    this.child.write('\n\r--');
    this.child.keyInput.subscribe((input) => {
      //do nothing because it will be replaced keyEventInput
    })

    this.child.keyEventInput.subscribe(e => {
      console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);
      const ev = e.domEvent;
      if(ev.keyCode !==8){
        string+=e.key;
      }
      else if (string!==""){
        string=string.substring(0, string.length - 1);
      }
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
      console.log(string);
      if (ev.keyCode === 13) { //When the enter is pressed
        if(string.includes("}")){
          this.bool=false;
        }
        if(string.includes("{") && !string.includes("}")){
            this.child.write('\r\n-->')
            this.bool=true;
        }
        else{
          this.child.write('\n' + FunctionsUsingCSI.cursorColumn(1) + '--'); // \r\n
        }
        if(this.bool===false){//When the sentences is finish the program return it

          this.data.sendAllCode(string).subscribe(data => {
            console.log(data);
            let list:any=data;
            list.forEach(element => {
              console.log(element);
            });
          });

        string="";
      }
        
      } else if (ev.keyCode === 8) {//backspace, delete from console
        // Do not delete the prompt
        if (this.child.underlying.buffer.active.cursorX > 2) {
          
          this.child.write('\b \b');
          
        }
      } else if (printable) {
        this.child.write(e.key);
        
      }
      
    })
    this.rowsControl.valueChanges.subscribe(() => { this.invalidate() });
    this.colsControl.valueChanges.subscribe(() => { this.invalidate() });
  }

  invalidate() {
    if (this.resizable)
      this.displayOption.activateDraggableOnEdge = { minWidth: 100, minHeight: 100 };
    else
      this.displayOption.activateDraggableOnEdge = undefined;
    if (this.fixed)
      this.displayOption.fixedGrid = { rows: this.rowsControl.value, cols: this.colsControl.value };
    else
      this.displayOption.fixedGrid = undefined;
    this.child.setDisplayOption(this.displayOption);
  }


  writeSubject = new Subject<string>();
  write() {
    this.writeSubject.next(eval(`'${this.inputControl.value}'`));
  }

  keyInput: string;
  onKeyInput(event: string) {
    this.keyInput = event;
  }

  get displayOptionForLiveUpdate() {
    return JSON.parse(JSON.stringify(this.displayOption));
  }
   getError(text){
    if(text.includes("Error")){
      var res = text.split(":");
      let string = res[1]+":"+res[2]+res[3];
      console.log(string);
      var res2 = string.split(",")
      console.log(res2[0]);
      return res2[0];
    }
  }


}
