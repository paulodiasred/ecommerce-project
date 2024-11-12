import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione CommonModule aqui
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    // Verificação de credenciais simples (você pode modificar conforme necessário)
    if (this.username === 'admin' && this.password === 'password') {
      // Armazenar o estado de autenticação no `localStorage`
      localStorage.setItem('isLoggedIn', 'true');

      // Redirecionar para a página inicial ou para onde desejar
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Credenciais inválidas. Por favor, tente novamente.';
    }
  }
}
