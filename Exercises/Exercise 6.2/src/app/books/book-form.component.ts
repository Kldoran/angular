import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, MinLengthValidator } from '@angular/forms';

import Book from './../models/book';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  @Output() createBook = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z1-9 ]*")])],
      author: ["", Validators.required]
    });
  }
  add() {
    this.createBook.emit(new Book(this.bookForm.get('title').value, this.bookForm.get('author').value, '', -1));
    this.bookForm.reset();
  }
}
