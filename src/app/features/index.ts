import { ActionReducerMap } from '@ngrx/store';
import { cartReducer, CartState } from './cart/cart.reducers';
import { productsReducer, ProductsState } from './products/products.reducers';

export type AppState = {
  cart: CartState;
  products: ProductsState;
};

export const appReducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
  products: productsReducer,
};
