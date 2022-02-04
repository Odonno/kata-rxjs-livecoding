import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product?: Product;

  constructor(private readonly productService: ProductService) {}

  onAddToCartButtonClicked() {
    if (this.product) {
      this.productService.addToCart(this.product);
    }
  }

  isInCart() {
    if (this.product) {
      return this.productService.cart.includes(this.product);
    }

    return false;
  }
}
