import { Injectable } from '@angular/core';
import { product } from '../modals/product.modale';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: product[] = [
    {
      id: 1,
      image: 'assets/images/product_1.jpg',
      title: 'long red shirt',
      price: 39.9,
      feature: {
        type: 'hot',
      },
      RRP: '',
    },
    {
      id: 2,
      image: 'assets/images/product_2.jpg',
      title: 'HYPE GREY SHIRT',
      price: 19.5,
      RRP: '',
    },

    {
      id: 3,
      image: 'assets/images/product_3.jpg',
      title: 'LONG SLEEVE JACKET',
      price: 32.2,
      feature: {
        type: 'sale',
      },
      RRP: 'RRP 64.40',
    },
    {
      id: 4,
      image: 'assets/images/product_4.jpg',
      title: 'DENIM MEN SHIRT',
      price: 59.9,
      RRP: '',
    },
    {
      id: 5,
      image: 'assets/images/product_5.jpg',
      title: 'LONG RED SHIRT',
      price: 79.9,
      RRP: '',
    },
    {
      id: 6,
      image: 'assets/images/product_6.jpg',
      title: 'HYPE GREY SHIRT',
      price: 59.9,
      feature: {
        type: 'new',
      },
      RRP: '',
    },
    {
      id: 7,
      image: 'assets/images/product_7.jpg',
      title: 'LONG SLEEVE JACKET',
      price: 15.9,
      RRP: '',
    },
    {
      id: 8,
      image: 'assets/images/product_8.jpg',
      title: 'DENIM MEN SHIRT',
      price: 43.99,
      feature: {
        type: 'sale',
      },
      RRP: 'RRP 64.40',
    },
    {
      id: 9,
      image: 'assets/images/product_9.jpg',
      title: 'LONG RED SHIRT',
      price: 39.9,
      feature: {
        type: 'hot',
      },
      RRP: '',
    },
    {
      id: 10,
      image: 'assets/images/product_10.jpg',
      title: 'HYPE GREY SHIRT',
      price: 19.5,
      RRP: '',
    },
    {
      id: 11,
      image: 'assets/images/product_11.jpg',
      title: 'LONG SLEEVE JACKET',
      price: 32.2,
      feature: {
        type: 'sale',
      },
      RRP: 'RRP 64.40',
    },
    {
      id: 12,
      image: 'assets/images/product_12.jpg',
      title: 'DENIM MEN SHIRT',
      price: 59.9,
      RRP: '',
    },
    {
      id: 13,
      image: 'assets/images/product_13.jpg',
      title: 'LONG RED SHIRT',
      price: 39.9,
      feature: {
        type: 'hot',
      },
      RRP: '',
    },
    {
      id: 14,
      image: 'assets/images/product_14.jpg',
      title: 'HYPE GREY SHIRT',
      price: 19.5,
      feature: {
        type: 'new',
      },
      RRP: '',
    },
    {
      id: 15,
      image: 'assets/images/product_15.jpg',
      title: 'LONG SLEEVE JACKET',
      price: 32.2,
      feature: {
        type: 'sale',
      },
      RRP: 'RRP 64.40',
    },
    {
      id: 16,
      image: 'assets/images/product_16.jpg',
      title: 'DENIM MEN SHIRT',
      price: 59.9,
      RRP: '',
    },
  ];
  dummyProducts: product[] = [...this.products];
  constructor() {}
  getProducts() {
    return this.dummyProducts;
  }
  getProductByiId(id: number) {
    return this.products.find((el) => el.id === id);
  }
  sortLow(low: boolean = true) {
    this.dummyProducts.sort((a, b) =>
      low ? a.price - b.price : b.price - a.price
    );
  }
  SearchByproduct(query: string) {
    this.dummyProducts = this.products.filter((product) =>
      product.title.toLocaleUpperCase().includes(query.toLocaleUpperCase())
    );
  }
  default() {
    this.dummyProducts = this.products.slice();
  }

  getFeatures() {
    return [
      ...new Set(
        this.products.filter((el) => el.feature).map((el) => el.feature?.type)
      ),
    ];
  }

  filterByFeatures(feature?: string): product[] {
    return (this.dummyProducts = this.products.filter(
      (el) => el.feature?.type === feature
    ));
  }
}
