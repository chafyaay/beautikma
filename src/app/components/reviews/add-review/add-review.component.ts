import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  addReviewForm:FormGroup;

  ngOnInit() {
    this.addReviewForm=new FormGroup({
      name:new FormControl('',{validators:[]}),
      email:new FormControl('',{validators:[]}),
      phone:new FormControl('',{validators:[]}),
      title:new FormControl('',{validators:[]}),
      comment:new FormControl('',{validators:[]}),
    })
  }

  get f(){
   return this.addReviewForm;
  }

  addReviewSubmit(){
     this.f.value();
  }

}