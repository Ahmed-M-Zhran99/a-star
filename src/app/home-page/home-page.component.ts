import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { product } from './../modals/product.modale';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  flag: boolean = true;
  constructor(private products: ProductService, private cart: CartService) {
    this.products = products;
  }
  displayProduct() {
    return this.products.getProducts().slice(0, 8);
  }

  addToCart(product: product) {
    console.log('hamda from home');
    console.log('test');
    this.cart.addProduct(product);
    this.flag = false;
  }

  cartItems() {
    return this.cart.cart;
  }

  checkInCart(id: number) {
    const find = this.cart.cart.find((el) => el.productId === id);

    if (!find) this.flag = true;
    if (find) this.flag = false;

    return this.flag;
  }

  removeProduct(id: number) {
    this.cart.removeProduct(id);
  }
}
