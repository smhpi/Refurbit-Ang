import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json'})

};

@Injectable()
export class BbApi{

    constructor(private http:HttpClient){}

    getBbApi(){

        return this.http.get('/bestbuyapi');

    }

    getShopifyApi(){
        return Observable.forkJoin(
            this.http.get('/shopifyapi')
        );
    }
}