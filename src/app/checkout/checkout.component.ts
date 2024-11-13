import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, MatRadioModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products: Product[] = [];
  totalCartValue: number = 0;
  name: string = '';
  email: string = '';
  address: string = '';
  paymentInfo: string = '';
  expiryDate: string = '';
  cvv: string = '';
  selectedPaymentMethod: string = 'creditCard'; // Valor padrão para o método de pagamento

  constructor(private cartService: CartService, private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalCartValue = this.products.reduce((total, product) => total + product.price, 0);
  }

  onSubmit(): void {
    if (this.validateForm()) {
      // Defina os detalhes do pedido
      this.orderService.setOrder({
        products: this.products,
        total: this.totalCartValue,
      });

      console.log('Pedido configurado:', this.orderService.getOrder()); // Log para verificação

      // Simular o processo de pagamento
      alert('Compra realizada com sucesso!');
      this.cartService.clearCart();
      this.router.navigate(['/order-summary']); // Redireciona apenas após a compra ser finalizada com sucesso
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  validateForm(): boolean {
    if (!this.name || !this.email || !this.address || !this.selectedPaymentMethod) {
      return false;
    }

    if (this.selectedPaymentMethod === 'creditCard' || this.selectedPaymentMethod === 'debitCard') {
      if (!this.paymentInfo || this.paymentInfo.length !== 16 || !this.expiryDate || !this.cvv || this.cvv.length !== 3) {
        return false;
      }
    }

    return true;
  }

  onPaymentInfoChange(value: string): void {
    this.paymentInfo = value.replace(/\s+/g, '');
  }
}
