import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Book from '../models/book';
import Review from '../models/review';
import { BookService } from '../books/book.service';
import { ReviewService } from '../reviews/review.service';
import { routeChange } from '../common/animations';

@Component({
    selector: 'app-review-list',
    templateUrl: './review-list.component.html',
    styleUrls: ['./review-list.component.css'],
    animations: [routeChange()],
    host: { '[@routeChange]': '' }
})
export class ReviewListComponent implements OnInit {
    bookId: number = -1;
    book: Book;
    reviews: Review[];
    constructor(private route: ActivatedRoute, private bookService: BookService, private reviewService: ReviewService) {}

    ngOnInit() {
        this.bookId = +this.route.snapshot.params['id'];
        this.bookService.getBook(this.bookId).subscribe(book => this.book = book);
        this.reviewService.getReviews(this.bookId).subscribe(reviews => this.reviews = reviews);
    }

    addReview(review: Review) {
        this.reviewService.addReview(review)
            .subscribe(review => this.reviews.unshift(review));
    }

}
