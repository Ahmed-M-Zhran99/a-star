import { Injectable } from '@angular/core';

import { cartItem } from '../modals/cart-item.modale';
import { product } from '../modals/product.modale';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  reduce(arg0: (acc: any, el: any) => any, arg1: number): number {
    throw new Error('Method not implemented.');
  }
  cart: cartItem[] = [];
  constructor() {}
  addProduct(product: product) {
    const item = {
      productId: product.id,
      productName: product.title,
      productImage: product.image,
      price: product.price,
      quantity: 1,
      totalPrice: 1 * product.price,
    };

    const isInCart = this.cart.find((el) => el.productId === item.productId);

    if (isInCart) return this.increaseQuantity(item.productId);
    // console.log(item);
    this.cart.push(item);
  }
  removeProduct(id: number) {
    this.cart = this.cart.filter((item) => item.productId !== id);
  }
  increaseQuantity(id: number) {
    const selectedItem = this.cart.find((item) => item.productId === id);
    if (!selectedItem) return;
    selectedItem.quantity++;
    selectedItem.totalPrice = +(
      selectedItem.quantity * selectedItem.price
    ).toFixed(2);
  }
  decreaseQuantity(id: number) {
    const selectedItem = this.cart.find((item) => item.productId === id);
    if (!selectedItem) return;
    if (selectedItem.quantity === 1) this.removeProduct(selectedItem.productId);
    selectedItem.quantity--;
    selectedItem.totalPrice = +(
      selectedItem.quantity * selectedItem.price
    ).toFixed(2);
  }
  clearCart() {
    this.cart = [];
  }
  getQuantity() {
    return this.cart
      .map((el) => el.quantity)
      .reduce((accu, el) => (accu += el), 0);
  }

  calcFullPrice(): number {
    return this.cart.reduce((acc, el) => (acc += el.totalPrice), 0);
  }
  calcFullQuantity(): number {
    return this.cart.reduce((acc, el) => (acc += el.quantity), 0);
  }
}

/**
 *   productId: number;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  totalPrice: number;
 *
 */
