import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart, CartItemI } from '../../cart';
import { Product } from '../../product';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Input()
  cartItem: CartItemI;
  @Input()
  product: Product;
  nbrItems=1;

  constructor(
    private servicecart:CartService,
  ) {}

  ngOnInit() {

    this.updateCartNbrItems();

  }

  updateCart(n:number){
   console.log(this.product.id)
    let cart: Cart = new Cart(null);
    let product = { ...this.product };
    this.servicecart.addItem(product,n);
    this.updateCartNbrItems();
 


  }

  updateCartNbrItems(){
    if(this.servicecart?.getNbrItemByProduct(this.product.id)){
      alert('hello')
      this.nbrItems=this.servicecart?.getNbrItemByProduct(this.product.id)[0]?.nbrItems

    }
    else  
    this.nbrItems= 1;
  }
}
