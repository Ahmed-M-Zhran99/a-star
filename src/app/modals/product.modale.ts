export interface product {
  id: number;
  image: string;
  title: string;
  price: number;
  feature?:{
    type:string,
  }
  RRP:  any;
}
