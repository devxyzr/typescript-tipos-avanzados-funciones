// Flexibilidad de parametros, los parametros rest nos permiten enviar la cantitidad de queramos de parametros en una funcion, casi sin limite.

import { ROLES, User } from './01-enums';

const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTUMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};

const rta2 = checkAdminRole();
console.log('checkAdminRole', rta2);

// rest params, se le envia a la funcion un array de strings

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    // Envalua dentro del string si existe el parametro
    return true;
  }
  return false;
};

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkAdminRole', rta3);

// Con el spread operator se envia un array de parametros, cualquier argumeto que se envie con una coma se va a recibir como un array

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    // Envalua dentro del string si existe el parametro
    return true;
  }
  return false;
};

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER);
console.log('checkAdminRole', rta);
