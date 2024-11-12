import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        AppComponent, // Adicione-o aqui se for standalone
        HomeComponent, // Adicione aqui
        ProductListComponent, // Adicione aqui
        ProductDetailComponent, // Adicione aqui
        CartComponent // Adicione aqui
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
