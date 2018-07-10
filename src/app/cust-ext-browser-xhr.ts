import {Injectable} from '@angular/core';
import {BrowserXhr} from '@angular/http';

@Injectable()
export class CustExtBrowserXhr extends BrowserXhr {
  constructor() {
      super();
  }
  build(): any {
    const xhr = super.build();
    xhr.withCredentials = true;             // this is all the magic we need for now
    return <any>(xhr);
  }
}
