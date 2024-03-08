// let numeros:number[] = [10,20,30];
let numeros:Array<number> = [20,30,40];

numeros.push(50); // insere no final
numeros.unshift(10); // insere no inicio
console.log(numeros)

let numeros_ro:ReadonlyArray<number> = [100,200,300]
console.log(numeros_ro)
