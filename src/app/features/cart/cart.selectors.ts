import { createSelector } from '@ngrx/store';
import { Product } from 'src/app/models';
import { AppState } from '..';

const selectState = (state: AppState) => state.cart;

export const selectCart = createSelector(
  selectState,
  (state) => state.products
);

export const selectCartCount = createSelector(
  selectCart,
  (products) => products.length
);

export const selectIsInCart = (product: Product) =>
  createSelector(selectCart, (products) =>
    products.some((p) => p.id === product.id)
  );
