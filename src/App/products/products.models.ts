import { Category } from '../categories/category.model';
import { BaseModel } from '../base.models';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  id: string | number;
  tittle: string;
  stock: number;
  sizes?: Sizes;
  category: Category;
}
