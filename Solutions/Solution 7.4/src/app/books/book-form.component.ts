import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import Book from './../models/book';

@Component({
    selector: 'book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
    sub: any;
    bookForm: FormGroup;
    @Output() createBook = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.bookForm = this.formBuilder.group({
            title: ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z1-9 ]*")])],
            author: ["", Validators.required]
        });
        this.sub = this.bookForm.valueChanges
            .subscribe((value) => {
                value.title = this.toTitleCase(value.title);
                this.bookForm.patchValue({ title: value.title }, { emitEvent: false });
                //debug code
                // console.log("Form  value = ", value);
            });

    }
    add() {
        this.createBook.emit(new Book(this.bookForm.get('title').value, this.bookForm.get('author').value, '', -1));
        this.bookForm.reset();
    }

    toTitleCase(s: string) {
        if ((s === null) || (s === '')) {
            return '';
        }
        return s.replace(/\w\S*/g, (t: string) => {
            return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        });
    }

}
