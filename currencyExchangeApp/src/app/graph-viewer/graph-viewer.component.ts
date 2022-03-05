import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-viewer',
  templateUrl: './graph-viewer.component.html',
  styleUrls: ['./graph-viewer.component.css']
})
export class GraphViewerComponent implements OnInit {
  tryResp:any;
  currencies:any;

  constructor(private httpClient: HttpClient) {
    //Finns det smartare sätt att skriva ut alla valutor? Funderade på att hämta ut dem
    //m.h.a http, men ska man behöva skicka en get request varje gång man öppnar denna sidan?
    this.currencies = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN',
                       'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF'];
  }

  ngOnInit(): void {

  }

  method(date:string, base:string, symbols:string){
    this.httpClient.get("http://api.exchangeratesapi.io/v1/"+date+"?access_key=7ec58f1adbc4b7c0654f3d03687420c6& base = "+base+"& symbols = "+symbols)
    .subscribe((response: any) =>{
      this.tryResp=response
      console.log(response)
    })
    }

}
