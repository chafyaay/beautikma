import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product:Product;
  constructor(
    private productservice:ProductsService,
    private activatedroute:ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(data=>{
      this.productservice.getProductById(data.id).subscribe(prd=>{
        this.product=prd;
      })
    })
  }
}
