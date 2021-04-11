import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personas:any;
  constructor( private data: DataService) { }

  ngOnInit() {  }

  pruebaEndpoint(){
    this.data.getUsers().subscribe( data => {
      console.log("DATA");
      console.log(data);
      this.personas=data;
    });
    
  }
}
