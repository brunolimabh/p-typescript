"use strict";
class Curso {
    nome = null;
    sobrenome = null;
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
let c1 = new Curso("Bruno", "Henrique");
console.log(c1.nome);
console.log(c1.sobrenome);
