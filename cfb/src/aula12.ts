function teste1():void {
    console.log("teste");
}

teste1();

function logar(user:string, pwd:string):void {
    console.log(`User: ${user}`);
    console.log(`Senha: ${pwd}`);
}

logar("bruno","123");

function somar(n1:number, n2:number):number{
    return n1+n2;
}