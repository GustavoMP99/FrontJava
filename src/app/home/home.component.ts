import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {AlertService} from 'src/app/_alert';
import { TerminalComponent} from 'src/app/terminal/terminal.component';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options = {
    autoClose: true,
    keepAfterRouteChange: false
};
  personas:any;
  constructor( private data: DataService, public alertService: AlertService ) { }

  ngOnInit() {  }


  goAlert(text){
    this.alertService.error(text, this.options)
  }
}
