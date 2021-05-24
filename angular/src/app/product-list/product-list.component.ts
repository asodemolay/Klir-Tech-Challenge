import { Component, OnInit } from '@angular/core';
import { ProductService, PromotionService } from '../services/services';
import { IPromotion, Product, PromotionType } from '../services/models';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  promotionsLoaded: IPromotion[];

  constructor(private productService: ProductService, private promoService: PromotionService) { }

  ngOnInit() {
    this.promoService.getApiPromotion().subscribe(data => this.promotionsLoaded = data);
    this.productService.getApiProduct().subscribe(data => this.products = data);
  }

  getPromotionType(promotion: IPromotion): PromotionType {
    if (promotion == null) {
      return -1;
    }
    return promotion.type;
  }
}
