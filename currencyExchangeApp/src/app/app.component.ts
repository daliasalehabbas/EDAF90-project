import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NavBarComponent} from './nav-bar/nav-bar.component';

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
  this.httpClient.get("http://api.exchangeratesapi.io/v1/latest?access_key=7ec58f1adbc4b7c0654f3d03687420c6" + url).subscribe(response =>{
    this.tryResp=response
    console.log(response)
  })
  }

  title = 'currenntExchangeApp';
}

