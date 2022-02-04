import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;

  isInCart$?: Observable<boolean>;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    if (this.product) {
      this.isInCart$ = this.productService.isInCart(this.product);
    }
  }

  onAddToCartButtonClicked(product: Product) {
    this.productService.addToCart(product);
  }
}
