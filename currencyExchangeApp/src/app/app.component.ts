import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tryResp:any;

  constructor(private httpClient: HttpClient){
  }

  method(url:string){
  return this.httpClient.get("http://api.exchangeratesapi.io/v1/latest?access_key=7ec58f1adbc4b7c0654f3d03687420c6" + url)
  // this.httpClient.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR?782d4b99733edef71cd914c6aa22ce9de82438f9fc3b37e716b0a97f65a8e4a7").subscribe(response =>{
  //   console.log(response)
  // }
  // )
  
  // .subscribe(response =>{
  //   console.log(JSON.stringify(Object.keys(response)))
  //   this.tryResp=response
  //   // console.log(Object.entries(response)[4][1])
  //   console.log(Object.keys(Object.create(this.tryResp).rates))
  //   console.log("res", this.tryResp)
  //   return this.tryResp
  // })
  //  console.log("utanför", this.tryResp)
  // //  return this.tryResp

  }

  title = 'currenntExchangeApp';
}


