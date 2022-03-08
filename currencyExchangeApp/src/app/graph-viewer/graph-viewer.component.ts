import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-graph-viewer',
  templateUrl: './graph-viewer.component.html',
  styleUrls: ['./graph-viewer.component.css']
})
export class GraphViewerComponent implements OnInit {
  startDate: any;
  endDate: any;
  base: any;
  currencies: any;
  cryptos: any;


  constructor(private global: GlobalService) {
    this.startDate = "";
    this.endDate = "";
    this.base = "";
    this.currencies = ['USD', 'EUR', 'SEK'];
    this.cryptos = []
  }

  ngOnInit(): void {
    // this.fill_currencies()
  }


  async GET_price_method(coins: string, currencies: string) {
    await this.global.get_Price(coins, currencies).then(resp => {

    })
  }

  // async fill_currencies(){
  //   await this.global.coins().then(resp => {
  //     this.cryptos = (Object.keys(Object.values(resp)[5]));
  //   })
  // }

  async get_historic_rates(coin: string, currency: string, startDate: string, endDate?: string) {
    if (endDate) {
      let historic: any
      await this.global.get_histroic(currency, coin, startDate, endDate).then(resp => {
        historic = resp
        }
      )
      console.log(historic)
      return historic
    } else {
      let value: any;
      await this.global.get_histroic(currency, coin, startDate).then(resp => {
        value = resp;
      })
      console.log(value)
      return value
    }

  }

}
