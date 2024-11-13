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

interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, ConfirmDialogComponent, MatDialogModule, MatCardModule, MatTableModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService, private dialog: MatDialog) { }

  confirmAction(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para confirmar a ação (por exemplo, remover item ou prosseguir)
        console.log('Ação confirmada!');
      } else {
        console.log('Ação cancelada.');
      }
    });
  }
  ngOnInit(): void {
    // Obtém os itens do carrinho dinamicamente
    this.products = this.cartService.getItems();
  }

  confirmRemove(productId: number): void {
    console.log('Chamando confirmRemove para produto ID:', productId);
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Resultado do diálogo:', result);
      if (result) {
        // Se o usuário confirmar, remova o item
        this.removeFromCart(productId);
      }
    });
  }

  removeFromCart(productId: number): void {
    // Apenas remove o item, sem confirmação adicional
    this.cartService.removeItem(productId);
    this.products = this.products.filter(product => product.id !== productId);
    console.log('Produto removido com sucesso.');
  }
}
