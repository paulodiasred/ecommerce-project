import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importado automaticamente
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component'; // Importar o LoginComponent


@NgModule({
    declarations: [
    ],
    imports: [
        LoginComponent,
        BrowserModule,
        MatCardModule,
        MatToolbarModule,
        FormsModule,
        CommonModule,
        AppComponent, // Adicione-o aqui se for standalone
        HomeComponent, // Adicione aqui
        ProductListComponent, // Adicione aqui
        ProductDetailComponent, // Adicione aqui
        CartComponent, // Adicione aqui
        BrowserAnimationsModule, // Necessário para Angular Material
        MatButtonModule // Adicione outros módulos conforme necessário
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
