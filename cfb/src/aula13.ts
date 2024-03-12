function soma(n1:number = 0, n2:number = 0):number {
    return n1 + n2;
}

console.log(soma(5,5))

function novoUser(user:string, nome?:string):void {
    console.log(`User: ${user}`);
    console.log(`Nome: ${nome}`);
}