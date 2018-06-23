import { Injectable } from '@angular/core';
import Book from '../models/book';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private url: string = "http://localhost:3000/api/bookreactions/"
    private headers: HttpHeaders = new HttpHeaders({
            'content-type': 'application/json'
        });
    constructor(private http: HttpClient) {}
    getBooks(): Observable < Book[] > {
        return this.http.get(this.url + "Books")
        .pipe(
          catchError(this.handleError)
        ) as Observable<Book[]>;
    }
    addBook(book: Book) {
        return this.http.post(this.url + "Books", book, {
            headers: this.headers
        }).pipe(
            catchError(this.handleError)
        ) as Observable < Book > ;
    }
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error.constructor === ErrorEvent) {
            errorMessage = 'An error occurred:', error.error.message;
        } else {
            errorMessage = `Backend returned code ${error.status},` +
                `body was: ${ error.error }`;
        }
        return throwError(errorMessage);
    }
}

const books: Book[] = [{
    title: "The Lord Of The Rings",
    author: "J R R Tolkien",
    cover: "",
    bookId: 1
}, {
    title: "The Hobbit",
    author: "J R R Tolkien",
    cover: "",
    bookId: 2
}];
