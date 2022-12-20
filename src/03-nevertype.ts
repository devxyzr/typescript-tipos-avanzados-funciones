//Never type: Funciones que nunca terminan,
// Void - no retorna nada

// El tipado inferido detecta en primera instancia que es una funcion de tipo never, es decir que la iteracion no va aparar una vez se ejecute la funcion.
const withoutEnd = () => {
  while (true) {
    console.log('nunca parar de aprender');
  }
};

// Este es un type never porque nunca para, cuando se ejecuta el nuevo error

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    // Array.IsArray detecta si el tipo que esta como parametro en un array
    return 'es un array';
  }
  return fail('not macth');
};

console.log(example('Hola'));
console.log(example([1, 1, 1, 1, 1]));
console.log(example(121212)); // Hasta aqui se ejecuta el programa
console.log(example('Hola despues del fail'));
