import { Injectable } from '@angular/core';
import { Client } from '../modals/client.modal';
import { cartItem } from '../modals/cart-item.modale';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Client[] = [
    {
      id: 1111,
      name: 'mohamed ahmed',
      cart: [],
      userName: 'ma',
      password: '1111',
      address: 'faysel',
    },
    {
      id: 1111,
      name: 'ahmed ahmed',
      cart: [],
      userName: 'aa',
      password: '1111',
      address: 'faysel',
    },
  ];

  constructor(private activeUser: ClientService) {}

  userLogin(userNAme: string, password: string): Client | undefined {
    const user = this.users.find(
      (el) => el.userName === userNAme && el.password === password
    );
    if (!user) return;

    return user;
  }

  updateUserCart(cart: cartItem[], id: number) {
    const fendedUser = this.users.find((el) => el.id === id);
    if (!fendedUser) return;
    fendedUser.cart = cart;
  }
  createUser(user: Client): undefined | boolean {
    const usersName = this.users.map((el) => el.userName);
    const isUsedName = usersName.find((name) => name === user.userName);
    if (isUsedName) return undefined;
    this.users.push(user);
    this.activeUser.client = user;
    if (!isUsedName) return true;
  }
}
