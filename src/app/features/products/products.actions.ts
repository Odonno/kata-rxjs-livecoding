import { createAction, props } from '@ngrx/store';
import { Product, SearchResponse } from 'src/app/models';

export const loadProducts = createAction('products/load');
export const loadProductsSuccess = createAction(
  'products/load-success',
  props<{ response: SearchResponse<Product> }>()
);
export const loadProductsError = createAction(
  'products/load-error',
  props<{ error: any }>()
);
