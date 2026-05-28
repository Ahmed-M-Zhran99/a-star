import { cartItem } from './cart-item.modale';

export interface Client {
  id: number;
  name: string;
  address: string;
  cart: cartItem[];
  userName: string;
  password: string;
}
