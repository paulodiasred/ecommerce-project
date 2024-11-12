import { Component } from '@angular/core';
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
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  // Se precisar implementar a função de logout, você pode adicionar aqui:
  logout() {
    localStorage.removeItem('isLoggedIn');
    // Adicione a lógica para redirecionar usando o roteador se necessário
  }
}
