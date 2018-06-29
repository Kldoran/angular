import { Injectable } from '@angular/core';
import Review from '../models/review';
import { Observable } from 'rxjs';
import { RestHelperService } from '../common/rest-helper.service';

@Injectable({
    providedIn: 'root'
})

export class ReviewService {
    private url: string;
    constructor(private restHelper: RestHelperService) {
        this.url = this.restHelper.url + "Reviews";
    }
    getReviews(id: number): Observable < Review[] > {
        return this.restHelper.get(this.url + '/' + id) as Observable < Review[] > ;
    }
    addReview(Review: Review) {
        return this.restHelper.post(this.url, Review) as Observable < Review > ;
    }
}
