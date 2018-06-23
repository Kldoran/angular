import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list.component';
import { BookFormComponent } from './book-form.component';
import { RouterModule } from '@angular/router';
import { BookService } from './book.service';
import { SharedModule } from '../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  providers: [BookService],
  declarations: [BookListComponent,BookFormComponent],
  exports: [BookListComponent]
})
export class BooksModule { }
