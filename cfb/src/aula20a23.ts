// public: acessado de qualquer lugar
// private: acessado somente na sua própria classe
// protected: acessado somente na sua própria classe e nas classes filho

class Conta {
    protected numero:number
    protected titular:string
    private saldo:number
    
    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular
        this.saldo = 0
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000) + 1
    }  
    protected info(){
        console.log(`Titular: ${this.titular}`)
        console.log(`Numero: ${this.numero}`)
    }
    public getSaldo():number {
        return this.saldo
    }
    protected deposito(valor:number){
        if(valor < 0) {
            console.log("Valor inválido")
            return
        }
        this.saldo += valor
    }
    protected saque(valor:number){
        if(valor < 0) {
            console.log("Valor inválido")
            return
        }

        if(valor <= this.saldo){
            this.saldo += valor
        } else {
            console.log("Saldo insuficiente")
        }
    }
}

class ContaPF extends Conta {
    private cpf:number

    constructor (cpf:number, titular:string){
        super(titular)
        this.cpf = cpf
    }

    protected info(){
        console.log(`Conta PF`)
        super.info
        console.log(`CPF: ${this.cpf}`)
    }

    public deposito(valor:number){
        if(valor > 1000){
            console.log("Valor de depósito muito alto para este tipo de conta")
        } else{
            super.deposito(valor)
        }
    }
    public saque(valor:number) {
        if(valor > 1000){
            console.log("Valor de saque muito alto para este tipo de conta")
        } else{
            super.saque(valor)
        }
    }
}

class ContaPJ extends Conta {
    private cnpj:number

    constructor (cnpj:number, titular:string){
        super(titular)
        this.cnpj = cnpj
    }

    protected info(){
        console.log(`Conta PJ`)
        super.info
        console.log(`CNPJ: ${this.cnpj}`)
    }

    public deposito(valor:number){
        if(valor > 10000){
            console.log("Valor de depósito muito alto para este tipo de conta")
        } else{
            super.deposito(valor)
        }
    }
    public saque(valor:number) {
        if(valor > 10000){
            console.log("Valor de saque muito alto para este tipo de conta")
        } else{
            super.saque(valor)
        }
    }

}

const conta1 = new ContaPF(111,"Bruno")
const conta2 = new ContaPJ(222,"Bigs")

conta1.deposito(800)
console.log(conta1.getSaldo())

conta2.deposito(800)
console.log(conta2.getSaldo())


conta1.saque(1500)
console.log(conta1.getSaldo())

conta2.saque(1500)
console.log(conta2.getSaldo())