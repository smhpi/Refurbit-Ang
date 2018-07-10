import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserXhr } from '@angular/http';

import {CustExtBrowserXhr} from './cust-ext-browser-xhr';
import { AppComponent } from './app.component';
import { InvComponent } from './inventory/inv.component';

const appRoutes: Routes = [
  { path: 'inventory', component: InvComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InvComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [
    {provide: BrowserXhr, useClass: CustExtBrowserXhr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
