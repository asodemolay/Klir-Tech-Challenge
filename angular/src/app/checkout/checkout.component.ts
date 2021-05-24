import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../services/models';
import { ShoppingCartService } from '../services/services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getApiShoppingCart().subscribe(data => this.sortItems(data));
  }

  sortItems(cart: ShoppingCart) {
    this.shoppingCart = cart;
    this.shoppingCart.shoppingCartItems = this.shoppingCart.shoppingCartItems.sort(function (a, b) {
      const _a = a.product.name.toUpperCase();
      const _b = b.product.name.toUpperCase();
      if (_a < _b) {
        return -1;
      } else if (_a > _b) {
        return 1;
      }
      return 0;
    });
  }

  handleUpdatedEvent(productId: number) {
    console.log("received");
    this.shoppingCartService.deleteApiShoppingCartProductId(productId).subscribe(data => this.sortItems(data));
  }
}
