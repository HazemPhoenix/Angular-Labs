import { Component, OnInit } from '@angular/core';
import { FetchProductsService } from '../../shared/services/fetch-products.service';
import { Product } from '../../shared/interface/product';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  products!: Product[];
  constructor(private productService: FetchProductsService) {}
  ngOnInit() {
    this.productService.getAllProducts().then((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
