import { Injectable } from '@angular/core';
import Review from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }
  getReviews() {
    return reviews;
  }
  addReview(review: Review) {
    reviews.push(review);
  }

}
const reviews: Review[] = [{
  content: "What a wonderful book!",
  bookId: 1
}, {
  content: "Wacka Wacka",
  bookId: 2
}];
