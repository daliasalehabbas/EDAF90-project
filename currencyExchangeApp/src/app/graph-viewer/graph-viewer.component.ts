import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-viewer',
  templateUrl: './graph-viewer.component.html',
  styleUrls: ['./graph-viewer.component.css']
})
export class GraphViewerComponent implements OnInit {
  tryResp:any;

  constructor(private httpClient: HttpClient) { }

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
