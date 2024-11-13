import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; 

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule]
})
export class OrderSummaryComponent implements OnInit {
  orderDetails: { products: Product[]; total: number } | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderDetails = this.orderService.getOrder();
    console.log('Resumo do pedido:', this.orderDetails); // Log para verificação
  }
}
