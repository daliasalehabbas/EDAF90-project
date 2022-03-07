import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-exchangeside',
  templateUrl: './exchangeside.component.html',
  styleUrls: ['./exchangeside.component.css']
})


export class ExchangesideComponent implements OnInit {
  
  currencies:Array<String>;
  regForm:any;
  
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.currencies=new Array();
   }

   getAllRates(){
  console.log("we are in")
   let model = new AppComponent(this.httpClient);
   let response = model.method('').subscribe(res =>{  this.currencies = Object.keys(Object.create(res).rates) })
   console.log("currencies", this.currencies)
  //  let rates=Object.keys(Object.create(response).rates)

   }

   getValues(total:string, from:string, to:string){
    console.log("toootal", total, from, to)
   }

  ngOnInit(): void {
    this.getAllRates()
    this.regForm=this.formBuilder.group({})

  }

  

}
