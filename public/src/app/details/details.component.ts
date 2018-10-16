import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  transaction: Object

  ngOnInit() {
    this.setTransaction()
  }

  setTransaction(){
    this._route.params.subscribe((params: Params) => {
      for(let transaction of this._httpService.ledger){
        if(transaction.id == params["id"]){
          this.transaction = transaction
          return
        }
      }
      this._router.navigate(['/ledger']);
    })
  }
}
