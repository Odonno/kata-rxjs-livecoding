import { Injectable } from '@angular/core';
import { Product, SearchResponse } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public cart: Product[] = [];

  constructor(private readonly http: HttpClient) {}

  getProducts(
    page: number = 0,
    itemsPerPage: number = 20
  ): Observable<SearchResponse<Product>> {
    return this.http.post<SearchResponse<Product>>(
      `https://api.secondemain.kiabi.com/api/products/search?page=${page}&size=${itemsPerPage}&sort=creationDate,desc`,
      {}
    );
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(product: Product) {
    this.cart.splice(this.cart.indexOf(product), 1);
  }
}
