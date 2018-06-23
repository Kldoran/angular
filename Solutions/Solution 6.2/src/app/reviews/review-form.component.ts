import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Review from '../models/review';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

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
      content: ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z1-9]*")])],
    });
  }
  add() {
    this.createReview.emit(new Review(this.reviewForm.get('content').value, -1));
    this.reviewForm.reset();
  }
}
