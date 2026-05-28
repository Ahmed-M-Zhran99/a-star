import { Component, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from '../modals/product.modale';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  flag: boolean = true;
  searchTerm = '';
  constructor(private products: ProductService, private cart: CartService) {
    this.products = products;
  }
  displayProduct() {
    return this.products.getProducts();
  }
  searchProducts(query: string) {
    this.searchTerm = query.trim();
    this.products.SearchByproduct(this.searchTerm);
  }
  sortUplander(low: boolean = true) {
    this.products.sortLow(low);
  }
  defaultHandler() {
    this.searchTerm = '';
    this.products.default();
  }

  getProductsService() {
    return this.products;
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

  addToCart(product: product) {
    this.cart.addProduct(product);
    this.flag = false;
  }
}
