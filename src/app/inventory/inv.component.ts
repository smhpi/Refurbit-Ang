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
          (data) => { this.products = data;},
          err => console.error(err),
          () => { let offers = this.products;
                
                    for (var i=0; i<offers.length; i++){
                        document.getElementById("bb").innerHTML = offers.offers[i];
                        console.log(offers.offers[i]);
                    }
                    
                }
        );
      }
      
      
}
