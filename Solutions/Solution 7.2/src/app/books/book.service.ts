import { Injectable } from '@angular/core';
import Book from '../models/book';
import { Observable } from 'rxjs';
import { RestHelperService } from '../common/rest-helper.service';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private url: string;
    constructor(private restHelper: RestHelperService) {
        this.url = this.restHelper.url + "Books";
    }
    getBooks(): Observable < Book[] > {
        return this.restHelper.get(this.url) as Observable < Book[] > ;
    }
    addBook(book: Book) {
        return this.restHelper.post(this.url, book) as Observable < Book > ;
    }
    getBook(id): Observable < Book > {
        const url = this.url.slice(0,this.url.length - 1) + "/" + id;
        return this.restHelper.get(url) as Observable < Book > ;
    }
}
