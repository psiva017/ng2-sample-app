import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

doSignup(data: User) {
    return this.http.post('localhost:8080/signup', data, this.getHeaders)
                    .map((res:Response ) => res.json());            
  }

dologin(data: User) {
    return this.http.post('localhost:8080/login', data, this.getHeaders)
                    .map((res:Response ) => res.json());            
  }
  
  // ----- Local Methods -----------

  getHeaders() {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
     headers.append('Content-Type', 'application/json');
    return { headers : headers };
  }
}
