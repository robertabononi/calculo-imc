// Criar um programa que calcule a soma de receitas e despesas de usuários e retorne o saldo

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },

    {
        nome:"Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },

    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

for(let i = 0; i < usuarios.length; i++) {
    let resultado = calcularSaldo(usuarios[i].receitas, usuarios[i].despesas)
    console.log(`O saldo do usuário ${usuarios[i].nome} é ${resultado}`)
}

//criar função somarNumeros(numeros)
    //for dos numeros e somar eles

function calcularSaldo(receitas, despesas) {
    let receitasSomadas =somarNumeros(receitas)
    let despesasSomadas = somarNumeros(despesas)

    return receitasSomadas - despesasSomadas
}

function somarNumeros(numeros) {
    let soma = 0
    for(let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }

    return parseInt(soma)
}