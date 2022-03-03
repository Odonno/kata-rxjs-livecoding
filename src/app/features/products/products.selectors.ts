import { createSelector } from '@ngrx/store';
import { AppState } from '..';

const selectState = (state: AppState) => state.products;

export const selectProducts = createSelector(
  selectState,
  (state) => state.products
);
