import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Corrija a importação aqui
import { CommonModule } from '@angular/common'; // Import para diretivas comuns, se necessário
import { ProductService, Product } from '../product.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule]
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Obtém os produtos em destaque
    this.featuredProducts = this.productService.getFeaturedProducts();
  }
}