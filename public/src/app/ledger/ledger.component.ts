import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(private _httpService: HttpService){}

  jim_coin: Number
  value: Number
  ledger: any

  ngOnInit() {
    this.getCoin()
    this.getValue()
    this.getLedger()
  }

  getValue(){
    this.value = this._httpService.jim_coin_value
  }

  getCoin(){
    this.jim_coin = this._httpService.jim_coin
  }

  getLedger(){
    this.ledger = this._httpService.ledger
  }
}
