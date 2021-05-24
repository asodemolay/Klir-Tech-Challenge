import { Component, Input, OnInit } from '@angular/core';
import { IPromotion, Product, ShoppingCart } from '../services/models';
import { ShoppingCartService } from '../services/services';

@Component({
  selector: '[app-products-to-buy]',
  templateUrl: './products-to-buy.component.html',
  styleUrls: ['./products-to-buy.component.css']
})
export class ProductsToBuyComponent implements OnInit {

  currentItems: number;
  currentTotal: number;

  constructor(private checkoutService: ShoppingCartService) { }

  ngOnInit() {
    this.currentTotal = 0;
    this.currentItems = 0;

    this.checkoutService.getApiShoppingCart().subscribe(data => this.updateState(data));
  }

  getPromotionDescription(): string {
    if (this.product.currentPromotion == null) {
      return "";
    }
    return this.product.currentPromotion.description;
  }

  public increment() {
    this.currentItems++

    this.checkoutService.postApiShoppingCartProductIdSetquantityQuantity({
      quantity: this.currentItems,
      productId: this.product.id
    }).subscribe(data => this.updateState(data));
  }

  public decrement() {
    this.currentItems--;

    if (this.currentItems < 0) this.currentItems = 0;

    if (this.currentItems == 0) {
      this.checkoutService.deleteApiShoppingCartProductId(this.product.id).subscribe(data => this.updateState(data));
      return;
    }

    this.checkoutService.postApiShoppingCartProductIdSetquantityQuantity({
      quantity: this.currentItems,
      productId: this.product.id
    }).subscribe(data => this.updateState(data));
  }

  updateState(cart: ShoppingCart) {
    if (cart.shoppingCartItems.length == 0) {
      this.currentTotal = 0;
      this.currentItems = 0;
      return;
    }

    const item = cart.shoppingCartItems.find(i => { return i.product.id === this.product.id });

    if (item) {
      this.currentTotal = item.total;
      this.currentItems = item.quantity;
    } else {
      this.currentTotal = 0;
      this.currentItems = 0;
    }
  }

  @Input() product: Product;
}
