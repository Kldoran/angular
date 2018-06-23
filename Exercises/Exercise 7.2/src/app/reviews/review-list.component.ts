import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from './review.service';
import Review from '../models/review';

@Component({
    selector: 'app-review-list',
    templateUrl: './review-list.component.html',
    styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
    bookId: number = -1;
    reviews: Review[];
    constructor(private route: ActivatedRoute, private reviewService: ReviewService) {}

    ngOnInit() {
        this.bookId = +this.route.snapshot.params['id'];
        this.getReviews();
    }

    getReviews() {
        this.reviews = this.reviewService.getReviews();
    }
    addReview(review: Review) {
        this.reviewService.addReview(review);
    }
}
