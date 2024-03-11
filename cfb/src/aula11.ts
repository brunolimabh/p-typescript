let nvalor:number;
let svalor:string;
let uvalor:unknown;

uvalor = 10;
// nvalor = uvalor;
// mesmo que o typeof retorna number,
// ele não afirma que o valor é do tipo number
nvalor = <number>uvalor;

// svalor == uvalor;
// é necessario afirmação de tipo, igual oa number
svalor = <string> uvalor;

console.log(typeof(uvalor)) // retorna number
console.log(uvalor)
console.log(typeof(nvalor)); // retorna number
console.log(nvalor);
console.log(typeof(svalor)); // retorna number
console.log(svalor);