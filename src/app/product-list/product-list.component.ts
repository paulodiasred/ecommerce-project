import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../cart.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatCardModule, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  dialog: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log('Produto adicionado ao carrinho:', product);

    this.snackBar.open('Produto adicionado ao carrinho!', 'Fechar', {
      duration: 3000,
      // Aqui você pode adicionar a lógica para realmente adicionar ao serviço de carrinho, se necessário
    });
  }

  confirmAddToCart(product: Product): void {
    console.log('Chamando confirmAdd para produto ID:', product);
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Resultado do diálogo:', result);
      if (result) {
        // Se o usuário confirmar, remova o item
        this.addToCart(product);
      }
    });
  }
}  
