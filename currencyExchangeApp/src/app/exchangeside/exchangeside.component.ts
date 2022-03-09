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
  total:Number;
  power: any;
  isCollapsed:boolean;
  
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private appcomponent: AppComponent, private global:GlobalService) {
    this.currencies=new Array();
    this.cryptos=new Array();
    this.total=0;
    this.power = "";
    this.isCollapsed=true;
   }

   getAllRates(){
  console.log("we are in")
   let response = this.appcomponent.method('').subscribe(res =>{  this.currencies = Object.keys(Object.create(res).rates) })
   console.log("currencies", this.currencies)

  //  console.log("abc",abc)

  //  let rates=Object.keys(Object.create(response).rates)
   }

   getValues(totals:string, from:string, to:string){
    this.isCollapsed=false;

    if(Number(totals) < 0){

    }else{
    console.log("toootal", totals, from, to, this.global.get_Price(from, to).then(x =>
      {this.total= Number(Object.values(Object.entries(x)[0][1])[0])*Number(totals) ,console.log("bre", this.total)}))
   }
  }

  ngOnInit(): void {
    console.log("im here")
    this.getAllRates()
    console.log("before", this.cryptos)
    this.appcomponent.fill_currencies().subscribe(rep => {this.cryptos=Object.keys(Object.values(rep)[5])})
    console.log("after", this.cryptos)

    this.regForm=this.formBuilder.group({})
  }

  

  

}
