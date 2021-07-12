import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  nbrItems: any;
  constructor(
    private cartservice: CartService,
    private notificationService: NotificationService,
    private routerservice: RouterService
  ) { }

  ngOnInit() {
    this.initCart();
  }
  initCart() {
    this.cartservice.getCurrentCartItem().subscribe(
      data => {
        this.nbrItems = data;
        this.notificationService.showNotifAlert({
          success: true,
          msgType: 'update-cart'
        });
      },
      err => {
        this.notificationService.showNotifAlert({
          success: false,
          msgType: 'update-cart'
        });
      }
    );
  }

  onClear() {
    alert()
    localStorage.removeItem('cart')
    this.cartservice.clearcart();
  }

  goToCart() {
    this.routerservice.goToUrl(['/cart-details'])
  }
}
