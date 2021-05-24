import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingCartItem } from '../services/models';

@Component({
  selector: '[app-checkout-item]',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public removeItem() {
    console.log("fired");
    this.updated.emit(this.item.product.id);
  }
  @Input() item: ShoppingCartItem;
  @Output() updated = new EventEmitter();
}
