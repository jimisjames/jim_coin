import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MineComponent } from './mine/mine.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}
  jim_coin = 0
  jim_coin_value = 1
  ledger = []
  trans_id = 1
  rand_num = Math.floor(Math.random() * 10) + 1;
  mine(num){
    if(num == this.rand_num){
      this.jim_coin ++
      this.rand_num = Math.floor(Math.random() * 10) + 1;
      let today = new Date();
      this.ledger.push({ 
        id: this.trans_id++,
        action: "Mined",
        amount: 1,
        value: this.jim_coin_value,
        timestamp: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      })
      return true
    } else {
      return false
    }
  }
  buy(amount){
    this.jim_coin += amount
    let today = new Date();
    this.ledger.push({ 
      id: this.trans_id++,
      action: "Bought",
      amount: amount,
      value: this.jim_coin_value,
      timestamp: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    })
    this.jim_coin_value += amount
  }
  sell(amount){
    if(amount <= this.jim_coin){
      this.jim_coin -= amount
      let today = new Date();
      this.ledger.push({ 
        id: this.trans_id++,
        action: "Sold",
        amount: amount,
        value: this.jim_coin_value,
        timestamp: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      })
      this.jim_coin_value -= amount
      return true
    } else {
      return false
    }
  }
}
