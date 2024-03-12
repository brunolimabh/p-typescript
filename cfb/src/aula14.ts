const teste = (texto:string):void => {
    console.log(texto)
}

teste("ola")

const soma2 = (n:number[]):number => {
    let s:number = 0;
    n.forEach((e)=>{
        s+=e
    })
    return s;
}

let numer:number[] = [10,20,30];

console.log(soma2(numer));