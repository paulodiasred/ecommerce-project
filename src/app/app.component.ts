import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ProductListComponent],
  template: '<app-product-list></app-product-list>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}