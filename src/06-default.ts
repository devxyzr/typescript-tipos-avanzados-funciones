export const createProducts = (
  id: string | number,
  // isNew?: boolean, Valores opcionales.
  // stock?: number

  // Valres por default, pueden recibir un tipo de valor, en caso de que no llegue ese valor se le asignara uno por defencto.
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,

    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

createProducts(1, true, 12);

const p1 = createProducts(1, true, 12);
console.log(p1);

const p2 = createProducts(1);
console.log(p2);
