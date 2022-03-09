import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalService } from './global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cryptos:Array<String>;
  // global:GlobalService;

  constructor(private httpClient:HttpClient, private global: GlobalService){
    this.cryptos=new Array();
    // this.global=new GlobalService(httpClient);
  }

  fill_currencies(){
    console.log("filled")
    return this.global.coins()
  }
  
  ngOnInit(): void {
  // this.fill_currencies()
  }


  getCryptos(){
    this.fill_currencies()
    return this.cryptos
  }

  


  

  method(url:string){
  return this.httpClient.get("http://api.exchangeratesapi.io/v1/latest?access_key=4d58d570cc35e78f921b232ca3a78484" + url)
  }

  title = 'currenntExchangeApp';
}

