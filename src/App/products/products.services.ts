import { Product } from './products.models';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};
