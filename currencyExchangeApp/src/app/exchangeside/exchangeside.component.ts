import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';



@Component({
  selector: 'app-exchangeside',
  templateUrl: './exchangeside.component.html',
  styleUrls: ['./exchangeside.component.css']
})


export class ExchangesideComponent implements OnInit {
  
  currencies:Array<String>;
  cryptos:Array<String>;
  regForm:any;
  
  
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private appcomponent: AppComponent, private global:GlobalService) {
    this.currencies=new Array();
    this.cryptos=this.appcomponent.getCryptos();

   }

   getAllRates(){
  console.log("we are in")
   let response = this.appcomponent.method('').subscribe(res =>{  this.currencies = Object.keys(Object.create(res).rates) })
   console.log("currencies", this.currencies)

  //  console.log("abc",abc)

  //  let rates=Object.keys(Object.create(response).rates)
   }

   getValues(total:string, from:string, to:string){
    
    console.log("toootal", total, from, to, this.global.get_Price(from, to).then(x => console.log("bre", Number(Object.values(Object.entries(x)[0][1])[0])*Number(total) )))
   }

  ngOnInit(): void {
    this.getAllRates()
    // this.cryptos=this.appcomponent.getCryptos()
    this.regForm=this.formBuilder.group({})
  }

  

}
