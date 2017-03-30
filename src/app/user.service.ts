import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserService {
  constructor (private http: Http) {}

getUsers() {
    return this.http.get('localhost:8080/users')
                    .map((res:Response ) => res.json());            
  }

  getUserById(id:number) {
    return this.http.get('localhost:8080/user?id='+id)
                    .map((res:Response ) => res.json());            
  }

  getUserByCompany(cName:String) {
    return this.http.get('localhost:8080/user?cName='+cName)
                    .map((res:Response ) => res.json());            
  }

  testCall() {
    return this.http.get('./app/user.json')
                    .map((res:Response ) => res.json());                            
  }
}



@Injectable()
export class UserDetailService {
  constructor (private http: Http) {}

getUserDetailById(id:number): Observable<User[]> {
    return this.http.get('localhost:8080/userdetails?id='+id).map(this.extractData) .catch(this.handleError);               
  }


  testDetailsCall() {
    return this.http.get('./app/user.json')
                    .map((res:Response ) => res.json());                            
  }
// ------------------ Service Methods [STARTS]----------------
   private extractData(res: Response) {
    const body: any = res.json();    
    return body.data || { };
  }


   private handleError (error: Response | any) {
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
  // ------------------ Service Methods [ENDS]----------------
}