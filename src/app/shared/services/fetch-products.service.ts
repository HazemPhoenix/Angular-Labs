import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class FetchProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>('https://dummyjson.com/products')
      .pipe(map((response) => response.products));
  }

  getProductById(id: number) {
    return this.http.get<Product>('https://dummyjson.com/products/' + id);
  }
}
