import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import  { throwError } from 'rxjs';

@Injectable()
export class RestHelperService {

    url: string = "http://localhost:3000/api/bookreactions/";
    postHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });

    constructor(private http: HttpClient){}

    get(url: string){
        return this.http.get(url)
          .pipe(
            catchError(this.handleError)
          );
    }
    post(url: string, data: {}){
        return this.http.post(url, data, {
            headers: this.postHeaders
        }).pipe(
            catchError(this.handleError)
        );

    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error.constructor === ErrorEvent) {
            errorMessage ='An error occurred:', error.error.message;
        } else {
            errorMessage = `Backend returned code ${error.status}`;// body was: ${ error.error }`;
        }
        return throwError(errorMessage);
    }

}
