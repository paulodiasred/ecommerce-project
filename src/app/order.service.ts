import { Injectable } from '@angular/core';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderDetails: { products: Product[]; total: number } | null = null;

  setOrder(details: { products: Product[]; total: number }): void {
    this.orderDetails = details;
  }

  getOrder(): { products: Product[]; total: number } | null {
    return this.orderDetails;
  }
}
