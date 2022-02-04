import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart$: Observable<Product[]>;

  constructor(private readonly productService: ProductService) {
    this.cart$ = this.productService.getCart();
  }

  onRemoveFromCartButtonClicked(product: Product) {
    this.productService.removeFromCart(product);
  }
}
