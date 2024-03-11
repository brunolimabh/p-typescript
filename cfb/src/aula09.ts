enum dias {
    domingo = 1,
    segunda = 2,
    terca = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sabado = 7
}

console.log(dias.domingo)
console.log(dias['domingo'])
console.log(dias[1])

const d = new Date();
console.log(d.getDay())
console.log(dias[d.getDay()])

enum cores {
    branco = "#fff",
    preto = "#333",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f"
}

console.log(cores.branco)

enum users {
    USER,
    ADMIN,
    SUPER
}

console.log(users.SUPER)