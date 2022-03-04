import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tryResp:any;

  constructor(private httpClient: HttpClient){
  }
  ngOnInit(): void {

  }

  method(url:string){
  this.httpClient.get("http://api.exchangeratesapi.io/v1/latest?access_key=7ec58f1adbc4b7c0654f3d03687420c6" + url)
  .subscribe(response =>{
    this.tryResp=response
    console.log(response)
  })
  }

}
