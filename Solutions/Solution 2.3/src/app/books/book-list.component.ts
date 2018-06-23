import { Component, OnInit, Input } from '@angular/core';
import Book from '../models/book';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    @Input() books: Book[];

    constructor() {}

    ngOnInit() {}

    trackBook(i: number, book: Book): number {
        return book.bookId;
    }

}
