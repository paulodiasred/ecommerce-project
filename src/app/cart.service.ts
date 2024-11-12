import { Injectable } from '@angular/core';
import { Product } from './product.service'; // Importe o modelo de Produto

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor() {
    // Carrega itens do `localStorage` ao inicializar o serviço
    this.loadCart();
  }

  addToCart(product: Product) {
    this.items.push(product);
    this.saveCart(); // Atualiza o `localStorage`
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.saveCart(); // Limpa o `localStorage`
    return this.items;
  }

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.id !== productId);
    console.log('Item removido:', productId); // Log para confirmar que a remoção foi feita
    console.log('Itens restantes:', this.items); // Log para verificar o estado atual
    this.saveCart(); // Atualiza o `localStorage` após remover
  }

  private saveCart(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
  }

  private loadCart(): void {
    if (this.isLocalStorageAvailable()) {
      const storedItems = localStorage.getItem('cartItems');
      if (storedItems) {
        this.items = JSON.parse(storedItems);
      }
    }
  }

  // Verifica se localStorage está disponível
  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
