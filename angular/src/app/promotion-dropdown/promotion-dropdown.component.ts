import { Component, Input, OnInit, Output } from '@angular/core';
import { IPromotion, Product, PromotionType } from '../services/models';
import { ProductService } from '../services/services';

@Component({
  selector: 'app-promotion-dropdown',
  templateUrl: './promotion-dropdown.component.html',
  styleUrls: ['./promotion-dropdown.component.css']
})
export class PromotionDropdownComponent implements OnInit {

  currentPromotion: PromotionType;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.currentPromotion = this.previousPromotion;
  }

  SelectChanged(newValue: PromotionType) {
    this.currentPromotion = newValue;
    let changedProduct: Product;
    console.log("current " + this.currentPromotion);
    if (this.currentPromotion == -1) {
      this.productService.deleteApiProductIdRemovePromotion(this.productId).subscribe(data => changedProduct = data);
    } else {
      this.productService.postApiProductIdAddPromotion({
        id: this.productId,
        promotionType: this.currentPromotion
      }).subscribe(data => changedProduct = data);
    }


    console.log("current " + this.currentPromotion);
  }


  @Input() promotions: IPromotion[];
  @Input() previousPromotion: PromotionType;
  @Input() productId: number;
}
