/* tslint:disable */
import { ShoppingCartItem } from './shopping-cart-item';
export interface ShoppingCart {
  shoppingCartItems?: Array<ShoppingCartItem>;
  total?: number;
}
