// Nico => [N,i,C,o] => string => string[]
// [N,I,C,O] => Nico => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(); // string
  } else {
    return input.split(''); // string[]
  }
} // Cuando se ejecutal al funcion no se tiene muy claro que tipo de dato me va a devolver.

const rtaArray = parseStr('Nico');
console.log('rtaArray', rtaArray);

const rtaStr = parseStr(['N', 'i', 'C', 'o']);
console.log('rtaArray', rtaArray);
