import { Component } from '@angular/core';
import { BbApi } from './bestbuy.service';
import { Observable } from 'rxjs/Rx';

@Component({
    templateUrl: './inv.component.html',
    styleUrls: ['./inv.component.css']
})

export class InvComponent {
    public productsBb ;
    public productShopify;

    constructor (private _bbService: BbApi) {}

    ngOnInit() {
       // this.getBbApi();
        this.getShopifyApi();
    }

  /*  getBbApi() {
       this._bbService.getBbApi().subscribe(
            (data) => { 
                this.productsBb = data;
                let offers = this.productsBb.offers;
                offers.map(function (product) {
                    return {
                        product: product };
                  })
                console.log(offers)
            },
            err => console.error(err),
            () => console.log(this.productsBb)
        );
    }
*/
    getShopifyApi(){
        this._bbService.getShopifyApi().subscribe(
            (data) => { 
                this.productShopify = data;
                let products = this.productShopify;

                console.log(products)
            },
            err => console.error(err),
            () => console.log(this.productShopify)
        );
     }
      
      
}
