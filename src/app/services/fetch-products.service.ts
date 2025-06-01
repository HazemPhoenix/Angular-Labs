import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchProductsService {
  constructor() {}

  getAllProducts() {
    return fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => data);
  }

  getProductById(id: number) {
    return fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  }
}
