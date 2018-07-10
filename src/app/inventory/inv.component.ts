
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
    templateUrl: './inv.component.html',
    styleUrls: ['./inv.component.css']
})

export class InvComponent {
    title = 'app works!';
    private apiUrl = 'https://marketplace.bestbuy.ca/api/offers?api_key=fa4ab3b8-4421-4a9a-9e2d-6c087e7bc9ce&max=100';
    data: any = {};

    constructor(private http: Http){
        console.log('Hello fellow  User');
        this.getContacts();
        this.getData();
    }

    getData() {
        return this.http.get(this.apiUrl);
    }

    getContacts() {
        this.getData().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
}

