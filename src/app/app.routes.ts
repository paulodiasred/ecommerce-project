import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component'; // Importe o componente de login
import { AuthGuard } from './auth.guard'; // Importe o AuthGuard
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';




export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão para 'HomeComponent'
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent // ou loadComponent: () => import('...').then(m => m.ProductDetailComponent) se for standalone
  }
];

// Certifique-se de que você exporte RouterModule configurado se necessário em algum ponto
export const AppRouting = RouterModule.forRoot(routes);
