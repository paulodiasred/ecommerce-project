import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService // Injetar o CartService
  ) {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProducts().find(p => p.id === productId);
  }

  addToCart(product: Product) {
    if (product) {
      this.cartService.addToCart(product);
      console.log(`Produto "${product.name}" adicionado ao carrinho!`);
      alert(`Produto "${product.name}" foi adicionado ao carrinho.`);
    }
  }
}