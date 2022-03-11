import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Product, SearchResponse } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';
import { ProductsEffects } from './products.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import * as ProductsActions from './products.actions';

describe('products.effects', () => {
  let effects: ProductsEffects;
  let actions$: Actions;
  let productService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsEffects,
        provideMockActions(() => actions$),
        {
          provide: ProductService,
          useValue: {
            getProducts: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.inject(ProductsEffects);
    productService = TestBed.inject(ProductService);
  });

  describe('loadProducts$', () => {
    it('should return loadProductsSuccess', () => {
      const response = {
        content: [
          {
            id: 1,
            label: 'Product 1',
          },
          {
            id: 2,
            label: 'Product 2',
          },
        ],
        page: 0,
        numberOfElements: 2,
        totalElements: 14,
      } as SearchResponse<Product>;

      const action = ProductsActions.loadProducts();

      const completion = ProductsActions.loadProductsSuccess({ response });

      jest
        .spyOn(productService, 'getProducts')
        .mockReturnValue(cold('-a|', { a: response }));

      actions$ = hot('-a', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.loadProducts$).toBeObservable(expected);
    });

    it('should return loadProductsError', () => {
      const error = 'Cannot load products...';

      const action = ProductsActions.loadProducts();

      const completion = ProductsActions.loadProductsError({ error });

      jest
        .spyOn(productService, 'getProducts')
        .mockReturnValue(cold('-#', undefined, error));

      actions$ = hot('-a', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.loadProducts$).toBeObservable(expected);
    });
  });
});
