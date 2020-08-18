import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(
    private http: HttpClient,
  ) {}
  /**
   * We could generalize even more
   * @param url URL
   *
   */
  get(url: string): Observable<any> {
    return this.http.get(url).pipe(
        catchError(error => this.errorhandler(error))
      );
  }

  errorhandler(err): Observable<any> {
    return err; // log the error;
  }
}
