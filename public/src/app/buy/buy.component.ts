import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private _httpService: HttpService){}

  jim_coin: Number
  amount = 0
  value: Number

  ngOnInit() {
    this.getCoin()
    this.getValue()
  }

  getValue(){
    this.value = this._httpService.jim_coin_value
  }

  getCoin(){
    this.jim_coin = this._httpService.jim_coin
  }

  buy(){
    if(this.amount > 0){
      this._httpService.buy(this.amount)
      this.getCoin()
      this.getValue()
    }
    this.amount = 0
  }
}
