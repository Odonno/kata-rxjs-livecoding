import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly productsService: ProductService,
    private readonly actions$: Actions
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      switchMap(() =>
        this.productsService.getProducts().pipe(
          map((response) => ProductsActions.loadProductsSuccess({ response })),
          catchError((error) =>
            of(ProductsActions.loadProductsError({ error }))
          )
        )
      )
    )
  );
}
