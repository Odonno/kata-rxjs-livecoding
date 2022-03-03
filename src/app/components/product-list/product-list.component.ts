import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/features';
import * as ProductsActions from 'src/app/features/products/products.actions';
import { selectProducts } from 'src/app/features/products/products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products$ = this.store.select(selectProducts);

  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(ProductsActions.loadProducts());
  }
}
