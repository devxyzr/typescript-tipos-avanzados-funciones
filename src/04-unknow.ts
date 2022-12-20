// Unknow type:

// any desactiva el tipado dinamico por lo que se puede comerter un error facilmente al tipar los datos.

let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.doSomething();

// Puedo asignar distintos tipos de datos, pero fuerza a hacer un verifiacion del tipo
// typado con unkown: va a forzar a hacer una verificaion del tipo.

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething(); // Hacer verificacion del tipo

// Este if me va a obligar a verificar el tipo
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase; // Al verififcar el tipo puedo acceder a los metodos de string
}

// Esta esperando un string. Pero al no ssber que dato va a llegar si es no no un string se tiene que verificar.
// Es usa el tipo unknow, el cual va  perdir una verificacion del tipo para poder parsear el dato.

const parse = (str: string): unknown => {
  return JSON.parse(str);
};

// Ejemplo, verifiacion de tipo si en boolean

if (typeof unknownVar === 'boolean') {
  let isNewvV2: boolean = unknownVar;
}
