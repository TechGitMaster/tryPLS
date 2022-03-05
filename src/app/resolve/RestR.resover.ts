import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestRResolver implements Resolve<any> {
  constructor(public http: HttpClient) {}


  //this is when the link is corrupted it will return this value to continue to-
  //__the browser
  catchesE(err: any): any{
      if(err){
        return of(false);
      }
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe( catchError(this.catchesE) );
  }
}