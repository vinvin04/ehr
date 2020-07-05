import { Injectable } from '@angular/core';
import {Record} from './record';
import { Block } from './Block';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordService {


  // records: Record[] = [
  //   {id: 1, name: 'a', age: 12, gender: 'male', date: '2020-03-13', diseasename: 'b', symptoms: 'c'
  //   , nameprivacy: 'private', ageprivacy: 'private', genderprivacy: 'private',
  //   diseasenameprivacy: 'private', dateprivacy: 'private', symptomsprivacy: 'private'},
  //   {id: 2, name: 'dfhdfgdf', age: 18, gender: 'female', date: '2020-03-13', diseasename: 'sfdgfdf', symptoms: 'cfdgdf'
  //   , nameprivacy: 'non-private', ageprivacy: 'private', genderprivacy: 'private',
  //   diseasenameprivacy: 'private', dateprivacy: 'non-private', symptomsprivacy: 'private'},
  //   {id: 2, name: 'dfhdfgdf', age: 18, gender: 'female', date: '2020-03-13', diseasename: 'sfdgfdf', symptoms: 'cfdgdf'
  //   , nameprivacy: 'non-private', ageprivacy: 'private', genderprivacy: 'private',
  //   diseasenameprivacy: 'private', dateprivacy: 'non-private', symptomsprivacy: 'private'},
  //   {id: 2, name: 'dfhdfgdf', age: 18, gender: 'female', date: '2020-03-13', diseasename: 'sfdgfdf', symptoms: 'cfdgdf'
  //   , nameprivacy: 'non-private', ageprivacy: 'private', genderprivacy: 'private',
  //   diseasenameprivacy: 'private', dateprivacy: 'non-private', symptomsprivacy: 'private'},
  //   {id: 2, name: 'dfhdfgdf', age: 18, gender: 'female', date: '2020-03-13', diseasename: 'sfdgfdf', symptoms: 'cfdgdf'
  //   , nameprivacy: 'non-private', ageprivacy: 'private', genderprivacy: 'private',
  //   diseasenameprivacy: 'private', dateprivacy: 'non-private', symptomsprivacy: 'private'},
  //   {id: 2, name: 'dfhdfgdf', age: 18, gender: 'female', date: '2020-03-13', diseasename: 'sfdgfdf', symptoms: 'cfdgdf'
  //   , nameprivacy: 'non-private', ageprivacy: 'private', genderprivacy: 'private',
  //   diseasenameprivacy: 'private', dateprivacy: 'non-private', symptomsprivacy: 'private'},
  //   {id: 2, name: 'dfhdfgdf', age: 18, gender: 'female', date: '2020-03-13', diseasename: 'sfdgfdf', symptoms: 'cfdgdf'
  //   , nameprivacy: 'non-private', ageprivacy: 'private', genderprivacy: 'private',
  //   diseasenameprivacy: 'private', dateprivacy: 'non-private', symptomsprivacy: 'private'}
  // ];

    //[1, 'a', 12, 'male', '2020-03-20', 'b', 'c', ['non-private' , 'non-private', 'non-private', 'non-private', 'non-private']],
  baseurl = 'http://127.0.0.1:3002/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
   }


    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  getBlocks(): Observable<Block[]> {
    return this.http.get<Block[]>('http://127.0.0.1:3000/blocks')
      .pipe(
        catchError(this.handleError<Block[]>('getBlocks', []))
      );
  }

  editRecord(record: Record) {
    console.log("edit record");
    this.http.post<Record>( 'http://127.0.0.1:3000/edit', record).subscribe(data =>{
      console.log(data);
    });
  }

  addRecord (record: Record) {
    console.log("add record");
    this.http.post<Record>( 'http://127.0.0.1:3000/add', record).subscribe(data =>{
      console.log(data);
    });
  }

// addRecord (record: Record) {
//   console.log("add record");
//   this.http.post<Record>( 'http://127.0.0.1:3000/add', {name:"hsdfj"} ,this.httpOptions).pipe(
//     tap((newRecord: Record) => console.log(`added record w/ id=${newRecord.id}`)),
//     catchError(this.handleError<Record>('addRecord'))
//   );
// }
getcsv(){
}

getUserRecords (data): Observable<Record[]> {
  console.log("user record"+data);
  return this.http.post<Record[]>( 'http://127.0.0.1:3000/userrecords', data);
}

  searchRecord(data: string[]): Observable<Record[]> {
    console.log("add record");
    return this.http.post<Record[]>( 'http://127.0.0.1:3000/search', data);
  }

  // getUserRecords(name: any): Observable<any> {
  //   console.log(name+"user record");
  //   return this.http.post<any>( 'http://127.0.0.1:3000/userrecords', name);
  // }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>('http://127.0.0.1:3000/allrecords')
      .pipe(
        catchError(this.handleError<Record[]>('getRecords', []))
      );
  }

  getRecord(id: number): Observable<Record> {
    console.log(id);
    return this.http.get<Record>(`http://127.0.0.1:3000/record/${id}`)
      .pipe(
        catchError(this.handleError<Record>('getRecord', ))
      );
  }

  addRequest(data: any): Observable<any> {
    var id = data[0];
    var name = data[1];
    console.log(id+" "+name);
    return this.http.post<any>(`http://127.0.0.1:3000/request`, data)
      .pipe(
        catchError(this.handleError<any>('request', ))
      );
  }
}
