import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, SearchResponse } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products$: Observable<SearchResponse<Product>>;

  constructor(private readonly productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }
}
