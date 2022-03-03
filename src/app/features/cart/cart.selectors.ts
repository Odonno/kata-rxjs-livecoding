import { createSelector } from '@ngrx/store';
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
