
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { InvComponent } from './inventory/inv.component';
import { BbApi } from './inventory/bestbuy.service';

const appRoutes: Routes = [
  { path: 'inventory', component: InvComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InvComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [ BbApi ],
  bootstrap: [AppComponent]
})
export class AppModule { }
