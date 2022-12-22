// Forma para trabajar con los objetos

type Sizes = 'S' | 'M' | 'L' | 'XL'; // Type se pueden hacer cosas mas puntuales.
// type Product = {
//   id: string | number;
//   tittle: string;
//   createAt: Date;
//   stock: number;
//   sizes?: Sizes;
// };

// La interfase va trabajar igual que el tipo. Se tiene que definir un cuerpo para la interfase, de un solo tipo no va a funcionar. O en solo una linea.
// Una de las funcionalidades de interface es que se puede extender.

interface Product {
  id: string | number;
  tittle: string;
  createAt: Date;
  stock: number;
  sizes?: Sizes;
}

const Products: Product[] = [];

Products.push({
  id: '1',
  tittle: 'p1',
  createAt: new Date(),
  stock: 90,
});
