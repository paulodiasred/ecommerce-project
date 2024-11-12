import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verifica se estamos no navegador
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      // Se `window` ou `localStorage` não estiverem disponíveis, trata como não autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}
