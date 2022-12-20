// Tuplas - Un array fuermente tipado
// Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos.

const prices: (number | string)[] = [1, 2, 3, 4, 5, 6, 4, 'hola']; // Tipado de string, un array de numeros y strings

// Dentro de un tupla es importante el orden la longitud y  como llega n los datos.

// Tupla: solo va recibir los datos que estan definidos en primera intancia

// Definimos que va a recibir un string y un number. En ese orden.

let user: [string, number, boolean}];

// user = ['nicobytes', 15];
// user = [12, 15];

// user = [];
// user = ['nico'];
// user = ['nico', 12];

user = ['nico', 12, true];

// Se puede hacer destructuring con las tuplas

const  [ username, age] = user

console.log(username)
console.log(age)


