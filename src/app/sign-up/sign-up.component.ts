import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';
import { Client } from '../modals/client.modal';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private users: UsersService, private router: Router) {}
  createUser(
    userName: string,
    name: string,
    password: string,
    address: string
  ) {
    if (userName === '' && name === '' && password === '' && address === '')
      return;
    const newUser: Client = {
      userName,
      name,
      password,
      address,
      cart: [],
      id: Date.now(),
    };

    const shouldGoHome = this.users.createUser(newUser);
    console.log(shouldGoHome);
    if (!shouldGoHome) return;
    this.router.navigate(['/']);
  }
}
