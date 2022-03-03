import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/features';
import { Product } from 'src/app/models';
import * as CartActions from 'src/app/features/cart/cart.actions';
import {
  selectCart,
  selectCartCount,
} from 'src/app/features/cart/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart$ = this.store.select(selectCart);
  count$ = this.store.select(selectCartCount);

  constructor(private readonly store: Store<AppState>) {}

  onRemoveFromCartButtonClicked(product: Product) {
    this.store.dispatch(CartActions.removeFromCart({ product }));
  }
}
