import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models';
import * as CartActions from './cart.actions';

export type CartState = {
  products: Product[];
};

export const initialCartState = {
  products: [],
};

export const cartReducer = createReducer<CartState>(
  initialCartState,

  on(CartActions.addToCart, (state, { product }) => {
    return {
      ...state,
      products: [...state.products, product],
    };
  }),

  on(CartActions.removeFromCart, (state, { product }) => {
    return {
      ...state,
      products: state.products.filter((p) => p.id !== product.id),
    };
  })
);
