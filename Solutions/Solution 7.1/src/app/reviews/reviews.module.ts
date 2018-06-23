import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewListComponent } from './review-list.component';
import { ReviewFormComponent } from './review-form.component';
import { ReviewService } from './review.service';

@NgModule({
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[ReviewService],
  declarations: [ReviewListComponent, ReviewFormComponent]
})
export class ReviewsModule { }
