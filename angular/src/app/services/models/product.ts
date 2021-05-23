/* tslint:disable */
import { IPromotion } from './ipromotion';
export interface Product {
  currentPromotion?: IPromotion;
  id?: number;
  name?: string;
  price?: number;
}
