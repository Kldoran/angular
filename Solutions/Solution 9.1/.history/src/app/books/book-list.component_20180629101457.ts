import { Component } from '@angular/core';
import Book from '../models/book';
import { BookService } from './book.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
    animations: [routeChange(), slideUp()],
    host: { '[@routeChange]': '' }
})
export class BookListComponent {
    searchTermStream: BehaviorSubject < string > = new BehaviorSubject < string > ('');
    books: Observable < Book[] > = this.searchTermStream.pipe(
        debounceTime(500),
        switchMap((term: string) => this.bookService.getBooksByTitle(term))
    );
    errorMessage: string;
    constructor(private bookService: BookService) {
        this.books.subscribe(null, (error) => this.errorMessage = error);
    }

    trackBook(i: number, book: Book): number {
        return book.bookId;
    }
    addBook(book: Book) {
        this.bookService.addBook(book)
            .subscribe(() => this.getBooks());
    }
    getBooks() {
        this.searchTermStream.next('');
    }
    search(term: string) {
        this.searchTermStream.next(term);
    }


}
