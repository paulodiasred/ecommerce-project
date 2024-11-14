import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct } from './cart/cart-product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartProduct[]>([]); // Armazena o estado do carrinho
  cartItems$ = this.cartItemsSubject.asObservable(); // Observable que os componentes podem se inscrever

  constructor() {
    // Ao inicializar o serviço, tentamos carregar os itens do carrinho do localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedCartItems = localStorage.getItem('cartItems');
      if (savedCartItems) {
        this.cartItemsSubject.next(JSON.parse(savedCartItems));
      }
    }
  }

  // Método para adicionar um item ao carrinho
  addToCart(product: CartProduct): void {
    if (!product.quantity) {
      product.quantity = 1; // Se não tiver, define como 1
    }
    const cartItems = this.cartItemsSubject.value;
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1; // Incrementa a quantidade se o produto já estiver no carrinho
    } else {
      cartItems.push(product);
    }
    this.updateCart(cartItems);
  }

  // Método para remover um item do carrinho
  removeItem(productId: number): void {
    const updatedItems = this.cartItemsSubject.value.filter(item => item.id !== productId);
    this.updateCart(updatedItems);
  }

  // Atualiza o carrinho e salva no localStorage
  public updateCart(cartItems: CartProduct[]): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Salva no localStorage
    }
    this.cartItemsSubject.next(cartItems); // Emite a nova lista de itens
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);  // Limpa o carrinho
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('cartItems');  // Remove do localStorage
    }
  }

  // Método para recuperar os itens do carrinho
  getItems(): CartProduct[] {
    return this.cartItemsSubject.value;
  }
}
