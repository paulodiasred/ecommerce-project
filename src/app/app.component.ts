import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ProductListComponent, MatToolbarModule, MatCardModule, MatButtonModule],
  templateUrl: './app.component.html', // Mantém apenas templateUrl ou template, não ambos
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'E-commerce';

  constructor(private router: Router) {}  // Injetar o Router

  // Método de logout
  logout(): void {
    localStorage.removeItem('isLoggedIn');  // Limpar o item de autenticação
    this.router.navigate(['/login']);  // Redirecionar para a página de login
  }
}
