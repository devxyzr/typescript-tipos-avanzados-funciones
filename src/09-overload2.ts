// Sobre carga del metodo, le estamos diciendo que dependiendo de el dato que le llega se puede acceder a la respuesta correcta

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(); // string
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true;
  }
} // Cuando se ejecutal al funcion no se tiene muy claro que tipo de dato me va a devolver.

const rtaArray = parseStr('Nico');
rtaArray.reverse(); // Se puede ejecutar metodos de array
console.log('rtaArray', rtaArray);

const rtaStr = parseStr(['N', 'i', 'C', 'o']);
rtaStr.toLowerCase(); // Se puede ejecutar metodos de string

console.log('rtaArray', rtaArray);
