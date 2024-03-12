// classes

class Computador {
    private nome:string;
    private ram:number;
    private cpu:number;
    private ligado:boolean;

    constructor(nome:string, ram:number, cpu:number, ligado:boolean) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }

    info():void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Ram: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado}`);
    }
}

let comp1 = new Computador("Rapidao",12,10,true);
let comp2 = new Computador("Gamer",32,20,false);

comp1.info()