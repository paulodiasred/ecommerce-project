import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRouting } from './app.routes'; // Importe o roteamento aqui
import { AppComponent } from './app.component'; // Standalone component
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        AppRouting,
        RouterModule,
        MatDialogModule
    ],
    bootstrap: [AppComponent] // Apenas o componente raiz
})
export class AppModule { }
