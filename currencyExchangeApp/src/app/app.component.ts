import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private tryResp:Object;

  constructor(private httpClient: HttpClient){
  }

  method(url:string):Object{
  this.httpClient.get("http://api.exchangeratesapi.io/v1/latest?access_key=7ec58f1adbc4b7c0654f3d03687420c6" + url).subscribe(response =>{
    console.log(JSON.stringify(Object.keys(response)))
    this.tryResp=response
    // console.log(Object.entries(response)[4][1])
    console.log(Object.keys(Object.create(this.tryResp).rates))
    console.log("res", response)
  })
  // console.log("utanför", this.tryResp)
  return response

  }

  title = 'currenntExchangeApp';
}


