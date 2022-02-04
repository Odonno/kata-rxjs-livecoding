import { Injectable } from '@angular/core';
import { Product, SearchResponse } from '../models';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cart$ = new BehaviorSubject<Product[]>([]);

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

  getCart(): Observable<Product[]> {
    return this.cart$.asObservable();
  }

  isInCart(product: Product): Observable<boolean> {
    return this.getCart().pipe(
      map((cart) => {
        return cart.some((p) => p.id === product.id);
      })
    );
  }

  addToCart(product: Product): void {
    const products = [...this.cart$.getValue(), product];
    this.cart$.next(products);
  }

  removeFromCart(product: Product): void {
    const products = this.cart$.getValue().filter((p) => p.id !== product.id);
    this.cart$.next(products);
  }
}
