import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
//5c70d697f3b115912447a3065e90b28a69392271de80403eb2548a0f94126295

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  tryResp: any;
  constructor(private http: HttpClient) { }
  
  get_Price(crypto_coins:string, currencies:string) {
    this.http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms="+crypto_coins+"&tsyms="+currencies+
    "&?api_key=5c70d697f3b115912447a3065e90b28a69392271de80403eb2548a0f94126295").subscribe(response => {
        this.tryResp = response;
        console.log(response)
      })
    return this.tryResp;
  }


  HTTPReq_coins() {
    this.http.get("https://min-api.cryptocompare.com/data/blockchain/list"
      + "?api_key=5c70d697f3b115912447a3065e90b28a69392271de80403eb2548a0f94126295")
      .subscribe(response => {
        console.log(response)
      })
    return this.tryResp;
  }
}
