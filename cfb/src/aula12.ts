function teste():void {
    console.log("teste");
}

teste();

function logar(user:string, pwd:string):void {
    console.log(`User: ${user}`);
    console.log(`Senha: ${pwd}`);
}

logar("bruno","123");

function soma(n1:number, n2:number):number{
    return n1+n2;
}