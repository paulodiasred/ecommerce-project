import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../product.service';

interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Obtém os itens do carrinho dinamicamente
    this.products = this.cartService.getItems();
  }

  removeFromCart(productId: number) {
    this.cartService.removeItem(productId);
    // Lógica para remover um produto (opcional)
    this.products = this.products.filter(product => product.id !== productId);
  }
}
