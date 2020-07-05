import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
//import { stat } from 'fs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserAuthenticated = false;
  currentuser: User;
  data;
  constructor(private http: HttpClient, private route: Router) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUser(data): Observable<any>  {
    return this.http.post<any>('http://127.0.0.1:3000/getuser', data)
      .pipe(
        catchError(this.handleError<any>('getRecord', ))
      );
  }

  signInUser(user: User): Observable<any> {
    return this.http.post<User>('http://127.0.0.1:3000/authuser', user)
      .pipe(
        catchError(this.handleError<any>('getRecord', ))
      );
  }

  logout() {
    localStorage.removeItem('user');
  }

  signUpUser(user: User) {
    console.log('add user');
    this.http.post<User>( 'http://127.0.0.1:3000/addUser', user).subscribe(data => {
      console.log(data);
      localStorage.setItem('userid',data[1]);
      console.log(localStorage.getItem('userid'));
    });
  }
}
