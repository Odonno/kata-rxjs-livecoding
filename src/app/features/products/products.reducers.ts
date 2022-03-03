import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models';
import * as ProductsActions from './products.actions';

export type ProductsState = {
  loading: boolean;
  products: Product[];
};

const initialProductsState = {
  loading: false,
  products: [],
};

export const productsReducer = createReducer<ProductsState>(
  initialProductsState,

  on(ProductsActions.loadProducts, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(ProductsActions.loadProductsSuccess, (state, { response }) => {
    return {
      ...state,
      loading: false,
      products: response.content,
    };
  }),

  on(ProductsActions.loadProductsError, (state, { error }) => {
    return {
      ...state,
      loading: false,
    };
  })
);
