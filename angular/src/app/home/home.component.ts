import { Component, OnInit } from '@angular/core';
import { Product } from '../services/models';
import { ProductService } from '../services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getApiProduct().subscribe(data => this.products = data);
  }
}

