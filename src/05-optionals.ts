// Nullisg-coalescing -> valor || or ??

export const createProducts = (
  id: string | number,
  isNew?: boolean,
  stock?: number // Stock es unparametro opcional, al ser un paramentro opcional en la definicion deber ir de ultimo.
) => {
  return {
    id,
    // Configuracion de opcion como pametro por defecto, esta configuracion nos permite definir un parametro por si no lleganra enviarse dentro de los parametros.
    // El operador || evalua un false (0, "", false) y automaticamente va asignar el valor por defecto
    // stock: stock || 10,
    // isNew: isNew || true,
    // Con el operador ?? va a hacer lo mismo pero solo va tener en cuenta los valores de null o undefined
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

createProducts(1, true, 12);

const p1 = createProducts(1, true, 12);
console.log(p1);

const p2 = createProducts(1);
console.log(p2);
