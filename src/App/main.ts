import { addProduct } from './products/products.services';

addProduct({
  id: '1',
  tittle: 'p1',
  createAt: new Date(),
  updateAt: new Date(),
  stock: 90,
  category: {
    createAt: new Date(),
    updateAt: new Date(),
    id: 2,
    name: 'computador',
  },
});
