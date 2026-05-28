import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(
    private users: UsersService,
    private router: Router,
    private client: ClientService,
    private cart: CartService
  ) {}
  login(userNAme: string, password: string) {
    const isLogedIn = this.users.userLogin(userNAme, password);
    if (!isLogedIn) return;
    this.client.client = isLogedIn;
    this.cart.cart = this.client.client.cart;
    this.router.navigate(['/']);
    return false;
  }
}
