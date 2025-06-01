import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FetchProductsService } from '../services/fetch-products.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  error = false;
  productId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: FetchProductsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('productId');
      if (this.productId) {
        this.loadProduct(+this.productId);
      }
    });
  }

  async loadProduct(id: number) {
    try {
      this.loading = true;
      this.error = false;
      this.product = await this.productService.getProductById(id);
    } catch (error) {
      console.error('Error loading product:', error);
      this.error = true;
    } finally {
      this.loading = false;
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  addToCart() {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', this.product);
  }

  generateStars(rating: number): string[] {
    const stars: string[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }

    if (hasHalfStar) {
      stars.push('half');
    }

    while (stars.length < 5) {
      stars.push('empty');
    }

    return stars;
  }
}
