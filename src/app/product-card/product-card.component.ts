import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
}
