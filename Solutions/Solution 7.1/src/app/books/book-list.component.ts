import { Component, OnInit, Input } from '@angular/core';
import Book from '../models/book';
import { BookService } from './book.service';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    books: Book[];
    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.getBooks();
    }
    trackBook(i: number, book: Book): number {
        return book.bookId;
    }
    addBook(book: Book) {
        this.bookService.addBook(book)
            .subscribe(book => this.books.unshift(book));
    }
    getBooks() {
        this.bookService.getBooks()
            .subscribe(books => this.books = books);
    }

}
