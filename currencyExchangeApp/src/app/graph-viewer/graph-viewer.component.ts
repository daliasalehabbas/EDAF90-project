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
  symbol: any;
  currencies: any;
  cryptos: any;

  constructor(private global: GlobalService) {
    this.startDate = "";
    this.endDate = "";
    this.base = "";
    this.currencies = ['USD', 'EUR', 'SEK'];
    this.cryptos = [];
    this.symbol = '';
  }

  ngOnInit(): void {
    this.fill_currencies()
  }

  add_favourite_base(base: string) {
    if (base == '') {

    } else if (window.localStorage.getItem('base') == null) {
      window.localStorage.setItem('base', JSON.stringify([base]));
    } else if (!JSON.parse(<string> window.localStorage.getItem('base')).includes(base)) {
      var favBases = JSON.parse(<string> window.localStorage.getItem('base'));
      favBases.push(base);
      window.localStorage.setItem('base', JSON.stringify(favBases));
    }
  }

  get_favourite_bases() {
    return JSON.parse(<string> window.localStorage.getItem('base'))
  }

  add_favourite_symbol(symbol: string) {
    if (symbol == '') {

    } else if (window.localStorage.getItem('symbols') == null) {
      window.localStorage.setItem('symbols', JSON.stringify([symbol]));
    } else if (!JSON.parse(<string> window.localStorage.getItem('symbols')).includes(symbol)) {
      var favSymbols = JSON.parse(<string> window.localStorage.getItem('symbols'));
      favSymbols.push(symbol);
      window.localStorage.setItem('symbols', JSON.stringify(favSymbols));
    }
  }

  get_favourite_symbols() {
    return JSON.parse(<string> window.localStorage.getItem('symbols'))
  }

  async GET_price_method(coins: string, currencies: string) {
    await this.global.get_Price(coins, currencies).then(resp => {

    })
  }

  async fill_currencies(){
    await this.global.coins().then(resp => {
      this.cryptos = (Object.keys(Object.values(resp)[5]));
    })
  }

  async get_historic_rates(coin: string, currency: string, startDate: string, endDate?: string) {
    this.global.add_favourite_symbol('1ST');
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
