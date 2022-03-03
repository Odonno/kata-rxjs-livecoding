import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models';

export const addToCart = createAction(
  'cart/add',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  'cart/remove',
  props<{ product: Product }>()
);
