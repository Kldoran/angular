import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Review  from '../models/review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  bookId: number = -1;
  reviews: Review[] = [{
    content: "What a wonderful book!",
    bookId: this.bookId
  }, {
      content: "Wacka Wacka",
      bookId: this.bookId
  }];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId = +this.route.snapshot.params['id'];
  }

}
