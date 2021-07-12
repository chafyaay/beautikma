import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.scss']
})
export class StarReviewComponent implements OnInit {
  @Input() reviews: any[];
  @Input() reviewRate: number;

  starrWidth = 0;
  constructor() {}

  ngOnInit() {
    this.getStarrWidth();
  }

  public getStarrWidth() {
    if (!!this.reviews) {
      let s = 0;
      this.reviews.forEach((item, i, arr) => {
        s += (100 / 5) * item.reviewRate;
      });
      this.starrWidth = s / this.reviews.length;
    } else {
      this.starrWidth = this.reviewRate *(100 / 5);
    }
  }
}
