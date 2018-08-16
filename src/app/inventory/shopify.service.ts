import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json'})

};

@Injectable()
export class ShopifyApi {

    constructor(private http: HttpClient) {}

    getShopifyApi() {

        return this.http.get('/shopifyapi');

    }
    
}