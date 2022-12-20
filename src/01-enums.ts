// enums
// Los enums deben ir en mayusculas
// Los enum van a permitir tener un set de opciones pre definidas. Esto permite no cometer errores en la lista de opciones.
export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTUMER = 'custumer',
}
export type User = {
  username: string;
  role: ROLES;
};

export const nicoUser: User = {
  username: 'nicobytes',
  // Se debe invocar al enum como si fuera un valor de un objeto con el "."
  // Es una manera directa de saver que opciones podemos agregarle a una variable

  role: ROLES.ADMIN,
};
