import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewListComponent } from './review-list.component';
import { ReviewFormComponent } from './review-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    FormsModule
  ],
  declarations: [ReviewListComponent, ReviewFormComponent]
})
export class ReviewsModule { }
