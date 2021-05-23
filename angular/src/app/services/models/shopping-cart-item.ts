/* tslint:disable */
import { Product } from './product';
export interface ShoppingCartItem {
  price?: number;
  product?: Product;
  promotionApplied?: string;
  quantity?: number;
  total?: number;
}
