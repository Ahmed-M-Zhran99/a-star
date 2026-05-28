import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { ClientService } from '../service/client.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() item = '';
  @Output() event = new EventEmitter<string>();
  test: string = 'test';

  constructor(
    private products: ProductService,
    private cart: CartService,
    private client: ClientService
  ) {
    this.sendData(this.test);
  }
  searchHandler(query: HTMLInputElement) {
    this.products.SearchByproduct(query.value);
    query.value = '';
    return false;
  }
  isMenuShown: boolean = false;
  toggleMenu() {
    this.isMenuShown = !this.isMenuShown;
  }

  sendData(value: string) {
    this.event.emit(value);
  }

  getFullPrice() {
    return this.cart.calcFullPrice();
  }

  getQuantity() {
    return this.cart.getQuantity();
  }
  getClient() {
    return this.client.client;
  }

  logout() {
    this.client.client = undefined;
    this.cart.cart = [];
  }
}
