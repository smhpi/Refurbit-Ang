import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
