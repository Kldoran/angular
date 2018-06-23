import { Component, OnInit, Input } from '@angular/core';
import Review from '../models/review';

@Component({
  selector: 'review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
@Input() bookId: number;
private review: Review;

  constructor() { }

  ngOnInit() {
    this.review = new Review('',this.bookId);
  }
  submit() {
    console.log(this.review);
  } 

}
