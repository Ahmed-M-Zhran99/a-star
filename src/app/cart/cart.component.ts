import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { cartItem } from '../modals/cart-item.modale';
import { ClientService } from '../service/client.service';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items: cartItem[] = [];
  constructor(
    private cart: CartService,
    private client: ClientService,
    private users: UsersService,
    private router: Router
  ) {}

  getCartItems() {
    return this.cart.cart;
  }
  clearCart() {
    return (this.cart.cart = []);
  }
  getFullPrice() {
    return this.cart.calcFullPrice();
  }
  handleIncreaseDecrease(id: number, type: string) {
    if (type !== 'inc' && type !== 'dec') return;
    if (type === 'inc') {
      this.cart.increaseQuantity(id);
    } else {
      this.cart.decreaseQuantity(id);
    }
  }
  checkOutHandler() {
    if (!this.client.client) this.router.navigate(['/authentication/signin']);
    if (!this.client.client) return;
    this.client.client.cart = this.cart.cart;
    this.users.updateUserCart(this.client.client.cart, this.client.client.id);

    console.log(this.client.client);
  }
}
