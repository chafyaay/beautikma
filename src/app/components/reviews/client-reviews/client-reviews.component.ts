import { Component, Input, OnChanges, OnInit } from '@angular/core';
interface ReviewersI{
  name:string;
  title:string;
  avatar:string;
  reviewRate:number,
  comment:string;
  commentDate:Date;

}
@Component({
  selector: 'app-client-reviews',
  templateUrl: './client-reviews.component.html',
  styleUrls: ['./client-reviews.component.scss']
})
export class ClientReviewsComponent implements OnChanges {
@Input() reviewers:ReviewersI;
public addReview=false;
  constructor() { }

  ngOnChanges(): void {
    console.log("this.reviewers")
    console.log(this.reviewers)
  }
  
}
