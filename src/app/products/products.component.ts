import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { FetchProductsService } from '../services/fetch-products.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: FetchProductsService) {}
  products!: Product[];
  ngOnInit() {
    this.productsService.getAllProducts().then((data: any) => {
      this.products = data;
    });
  }
  onProductClick(productId: number) {
    console.log(`Product clicked: ${productId}`);
    // Add navigation logic here if needed
  }
  onAddToCart(productId: number) {
    console.log(`Add to cart clicked for product: ${productId}`);
    // Add cart logic here
  }
}
