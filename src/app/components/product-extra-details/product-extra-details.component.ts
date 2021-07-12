import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-extra-details',
  templateUrl: './product-extra-details.component.html',
  styleUrls: ['./product-extra-details.component.scss']
})
export class ProductExtratDetailsComponent implements OnInit {
  @Input() product: Product;
  productExtraDetails: any[] = [];
  openTabContent = false;
  public selectedTabIdx = 0;
  constructor() { }

  ngOnInit() {
    this.productExtraDetails.push(
      { label: 'Description', value: this.product['description'] },
      { label: 'Avis Clients', value: this.product['reviews'] },
    )
  }



}
