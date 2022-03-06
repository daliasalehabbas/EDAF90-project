import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-graph-viewer',
  templateUrl: './graph-viewer.component.html',
  styleUrls: ['./graph-viewer.component.css']
})
export class GraphViewerComponent implements OnInit {
  tryResp:any;
  currencies:any;
  startDate:any;
  endDate:any;
  base:any;
  symbols:any;

  constructor(private global: GlobalService) {

  }

  ngOnInit(): void {

  }
  
  method(coins:string, currencies:string ){
    this.global.get_Price(coins, currencies)
  }

}
