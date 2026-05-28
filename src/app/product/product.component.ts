import { Component } from '@angular/core';
import { product } from '../modals/product.modale';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  id: string = '';
  constructor(
    private product: ProductService,
    private route: ActivatedRoute,
    private cart: CartService
  ) {
    route.params.subscribe((params) => (this.id = params['id']));
  }
  getProduct(id: number): product | undefined {
    return this.product?.getProductByiId(id);
  }

  addToCart() {
    const product = this.getProduct(+this.id);
    if (!product) return;
    this.cart.addProduct(product);
    return false;
  }

  // isInCart() {
  //   const yes = this.cart.cart.find((el) => el.productId === +this.id);
  //   console.log('hamda');
  //   if (!yes) return false;
  //   if (yes) return true;
  // }
}
