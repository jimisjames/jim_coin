import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService){}

  jim_coin: Number
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
}
