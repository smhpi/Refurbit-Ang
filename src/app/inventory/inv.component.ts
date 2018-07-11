import { Component } from '@angular/core';
import { BbApi } from './bestbuy.service';
import { Observable } from 'rxjs/Rx';

@Component({
    templateUrl: './inv.component.html',
    styleUrls: ['./inv.component.css']
})

export class InvComponent {
    public products ;
    constructor (private _bbService: BbApi) {}
    ngOnInit() {
        this.getBbApi();
      }
      getBbApi() {
       this._bbService.getBbApi().subscribe(
          (products) => { this.products = products; },
          err => console.error(err),
          () => console.log(this.products)
        );
      }
}
