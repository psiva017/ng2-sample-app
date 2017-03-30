import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './user';


@Injectable()
export class UserService {
user: User;
  constructor (private http: Http) {}

getUsers(): Observable<User[]> {
   console.log(this.http.get('localhost:8080/users'));
    return this.http.get('localhost:8080/users')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

   private extractData(res: Response) {
    const body: any = res.json();
    console.log(body);
    console.log("dd");
    
    return body.data || { };
  }
   private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
