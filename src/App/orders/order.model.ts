import { Product } from '../products/products.models';
import { User } from '../users/user.model';

interface Order {
  id: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
}
