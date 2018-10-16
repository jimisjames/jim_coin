import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(private _httpService: HttpService){}

  jim_coin: Number
  guess_num: Number

  ngOnInit() {
    this.getCoin()
  }

  getCoin(){
    this.jim_coin = this._httpService.jim_coin
  }

  mine(){
    let x = this._httpService.mine(this.guess_num)
    if(x == true){
      this.getCoin()
      alert("You earned a coin!")
    }
    this.guess_num = undefined
  }
}
