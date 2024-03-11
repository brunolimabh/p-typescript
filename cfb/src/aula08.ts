let dados = {
    nome: "Gustavo",
    idade: 23,
    status: "A",
    ola: () => {console.log("nome")},
    info: (p:string) => {console.log(p)}
}

console.log(typeof(dados))
console.log(dados.nome)

dados.ola();
dados.info("Bruno");