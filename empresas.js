// Armazenar dados dentro de um objeto

const empresa = {
    nome: "Rocketseat",
    cor: "roxo",
    foco: "programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

// Imprimr em tela as informações em uma frase

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.`)