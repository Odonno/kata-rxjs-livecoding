import { Component } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: Product[];

  constructor(private readonly productService: ProductService) {
    this.cart = this.productService.cart;
  }

  onRemoveFromCartButtonClicked(product: Product) {
    this.productService.removeFromCart(product);
  }
}
