import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  constructor(private cart: CartService) {}
  getFullPrice() {
    return this.cart.calcFullPrice();
  }

  getQuantity() {
    return this.cart.getQuantity();
  }
}
