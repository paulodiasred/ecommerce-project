import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../product.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CartProduct } from './cart-product.model';  // Correto agora, usando o tipo importado

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, ConfirmDialogComponent, MatDialogModule, MatCardModule, MatTableModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: CartProduct[] = [];

  constructor(private cartService: CartService, private dialog: MatDialog) { }

  ngOnInit(): void {
    // Recupera os itens do carrinho armazenados no localStorage
    this.cartService.cartItems$.subscribe(cartItems => {
      this.products = cartItems; // Atualiza a lista de produtos
    });  
  }
  

  confirmRemove(productId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removeFromCart(productId);
      }
    });
  }

  removeFromCart(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      const quantityToRemove = product.removeQuantity || 1;
      if (product.quantity > quantityToRemove) {
        product.quantity -= quantityToRemove;
      } else {
        this.cartService.removeItem(productId);
        this.products = this.products.filter(product => product.id !== productId);
      }
      product.removeQuantity = undefined;

      this.cartService.updateCart(this.products);
      console.log('Produto atualizado ou removido com sucesso.');
    }
  }

  getTotalPrice(product: CartProduct): number {
    if (isNaN(product.price) || isNaN(product.quantity)) {
      return 0;
    }
    return product.price * product.quantity;
  }
}
