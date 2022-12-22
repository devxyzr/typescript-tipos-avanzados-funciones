export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTUMER = 'custumer',
}
export interface User {
  id: string | number;
  username: string;
  role: ROLES;
}
