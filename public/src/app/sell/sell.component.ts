import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private _httpService: HttpService){}

  jim_coin: Number
  value: Number
  amount = 0

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

  sell(){
    if(this.amount > 0){
      let x = this._httpService.sell(this.amount)
      if(x == false){
        alert("You cannot sell coins you don't have!")
      }
      this.amount = 0
      this.getCoin()
      this.getValue()
    }
  }
}
