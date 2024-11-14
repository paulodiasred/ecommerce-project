import { Component, OnInit } from '@angular/core';  // Importando OnInit
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';
import { CartProduct } from '../cart/cart-product.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Adicionar CommonModule


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],  // Incluindo apenas os módulos necessários aqui
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']  // Corrigido o nome de 'styleUrl' para 'styleUrls'
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;
  sanitizedTrailerUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private location: Location,
    private sanitizer: DomSanitizer  // Injeção do DomSanitizer
  ) {}

  ngOnInit(): void {
    // Pegando o ID do produto da URL
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Encontrando o produto com o ID correspondente
    this.product = this.productService.getProducts().find(p => p.id === productId);

    // Verificando e sanitizando a URL do trailer
    if (this.product && this.product.trailerUrl) {
      this.sanitizedTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.product.trailerUrl);
    }
  }

  goBack(): void {
    this.location.back();  // Volta à página anterior
  }

  addToCart(product: Product): void {
    if (product) {
      // Transformar o produto em CartProduct, incluindo o campo 'quantity'
      const cartProduct: CartProduct = {
        ...product,  // Espalha as propriedades de 'Product'
        quantity: 1  // Define o valor de 'quantity' como 1 (ou outro valor que você desejar)
      };
  
      // Agora adiciona o 'cartProduct' ao carrinho
      this.cartService.addToCart(cartProduct);
      console.log(`Produto "${product.name}" adicionado ao carrinho.`);
      alert(`Produto "${product.name}" foi adicionado ao carrinho.`);
    }
  }
}
