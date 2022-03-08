import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { delay, map, lastValueFrom } from 'rxjs';
//5c70d697f3b115912447a3065e90b28a69392271de80403eb2548a0f94126295

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  __year: number;
  __month: number;
  __week: number;
  __day: number;
  __extractedValue: any;
  __historicValues:any;

  constructor(private http: HttpClient) {
    this.__year = 31536000;
    this.__month = 2678400;
    this.__week = 604800;
    this.__day = 86400;
    this.__extractedValue = 0;
    this.__historicValues = [];
  }

  get_Price(crypto_coins: string, currencies: string) {
    return lastValueFrom(this.http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + crypto_coins + "&tsyms=" + currencies +
      "&?api_key=5c70d697f3b115912447a3065e90b28a69392271de80403eb2548a0f94126295"))
  }

  convert_date_to_unix(YYYYMMDD: string): number {
    return Number(new Date(YYYYMMDD).getTime() / 1000);
  }

  async get_histroic(fromCurrency: string, toCoin: string, startDate: string, endDate?: string) {
    this.__historicValues = [];
    let start_time_unix: number = this.convert_date_to_unix(startDate);
    if (endDate) {
      let end_time_unix: number = this.convert_date_to_unix(endDate);
      let interval: number = end_time_unix - start_time_unix;
      if (interval <= this.__week) {
        console.log("Week")
        for (let i = start_time_unix; i <= end_time_unix; i += this.__day) {
          let value = this.get_from_date(fromCurrency, toCoin, i.toString())
          await value.then(resp => {
            this.__historicValues.push(Object.values(resp)[0][fromCurrency])
          })
        }
      } else if (interval > this.__week && interval <= this.__month) {
        console.log("Month")
        for (let i = start_time_unix; i <= end_time_unix; i += 2 * this.__day) {
          let value = this.get_from_date(fromCurrency, toCoin, i.toString())
          await value.then(resp => {
            this.__historicValues.push(Object.values(resp)[0][fromCurrency])
          })
        }
      } else if (interval > this.__month && interval <= 3 * this.__month) {
        console.log("3 months")
        for (let i = start_time_unix; i <= end_time_unix; i += 4 * this.__day) {
          let value = this.get_from_date(fromCurrency, toCoin, i.toString())
          await value.then(resp => {
            this.__historicValues.push(Object.values(resp)[0][fromCurrency])
          })
        }
      } else if (interval > 3*this.__month && interval <= this.__year) {
        console.log("year")
        for (let i = start_time_unix; i <= end_time_unix; i += this.__month) {
          let value = this.get_from_date(fromCurrency, toCoin, i.toString())
          await value.then(resp => {
            this.__historicValues.push(Object.values(resp)[0][fromCurrency])
          })
        }
      } else if (interval > this.__year && interval <= 3 * this.__year) {
        console.log("3 years")
        for (let i = start_time_unix; i <= end_time_unix; i += 2 * this.__month) {
          let value = this.get_from_date(fromCurrency, toCoin, i.toString())
          await value.then(resp => {
            this.__historicValues.push(Object.values(resp)[0][fromCurrency])
          })
        }
      } else if (interval > 3 * this.__year) {
        console.log("3+ years")
        for (let i = start_time_unix; i <= end_time_unix; i += 6 * this.__month) {
          let value = this.get_from_date(fromCurrency, toCoin, i.toString())
          await value.then(resp => {
            this.__historicValues.push(Object.values(resp)[0][fromCurrency])
          })
        }
      }
      return this.__historicValues;
    } else {
      let value = this.get_from_date(fromCurrency, toCoin, this.convert_date_to_unix(startDate).toString())
      await value.then(resp => {
        this.__extractedValue = Object.values(resp)[0][fromCurrency]
      })
      return this.__extractedValue
    }
  }

  async get_from_date(fromCurrency: string, toCoin: string, date: string) {
    return lastValueFrom(this.http.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=" + toCoin + "&tsyms=" + fromCurrency + "&ts=" + date
      + "&?api_key=5c70d697f3b115912447a3065e90b28a69392271de80403eb2548a0f94126295").pipe(delay(50)))
  }

  //Denna funktionen är inte färdig än försöker extrakta själva coinen och sen när den har funnits på exchange
  coins() {
   return this.http.get("https://min-api.cryptocompare.com/data/blockchain/list"
      + "?api_key=5c70d697f3b115912447a3065e90b28a69392271de80403eb2548a0f94126295")
  }
}
