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
    this.global.coins().subscribe(rep => {this.cryptos=Object.keys(Object.values(rep)[5])}
    )
  }
  
  ngOnInit(): void {
   this.fill_currencies()
  }


  getCryptos(){
    return this.cryptos
  }


  

  method(url:string){
  return this.httpClient.get("http://api.exchangeratesapi.io/v1/latest?access_key=7ec58f1adbc4b7c0654f3d03687420c6" + url)
  }

  title = 'currenntExchangeApp';
}

