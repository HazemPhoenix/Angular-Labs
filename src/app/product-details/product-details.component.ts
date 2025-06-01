import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  productId!: string | null;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('productId');
    });
  }
}
