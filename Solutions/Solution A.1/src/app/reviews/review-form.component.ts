import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Review from '../models/review';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  @Input() bookId: number;
  reviewForm: FormGroup;
  @Output() createReview = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
          comment: ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z1-9]*")])]
    });
  }
  add() {
      this.createReview.emit(new Review(this.reviewForm.get('comment').value, this.bookId));
      this.reviewForm.reset();
  }

}
