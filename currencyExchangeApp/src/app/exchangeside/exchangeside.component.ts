import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-exchangeside',
  templateUrl: './exchangeside.component.html',
  styleUrls: ['./exchangeside.component.css']
})


export class ExchangesideComponent implements OnInit {
  
   private currencies:Array<String>;
  
  constructor(private httpClient: HttpClient) {
    this.currencies=[];
   }

   getAllRates(){
  console.log("we are in")
   let model = new AppComponent(this.httpClient);
   let response = model.method('').subscribe(res => console.log("hej", res))
  //  let rates=Object.keys(Object.create(response).rates)
   console.log("rates", response)
   }

  ngOnInit(): void {
  }

}
