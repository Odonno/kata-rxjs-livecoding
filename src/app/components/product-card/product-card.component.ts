import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models';
import * as CartActions from 'src/app/features/cart/cart.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/features';
import { selectIsInCart } from 'src/app/features/cart/cart.selectors';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;

  isInCart$?: Observable<boolean>;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    if (this.product) {
      this.isInCart$ = this.store.select(selectIsInCart(this.product));
    }
  }

  onAddToCartButtonClicked(product: Product) {
    this.store.dispatch(CartActions.addToCart({ product }));
  }
}
