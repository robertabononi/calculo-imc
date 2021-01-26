// Criar objeto que armazene dados de um programador

const developer = {
    nome: "Julius",
    idade: 23,
    tecnologias: [
        {nome: "JavaScript", especialidade: "Web"},
        {nome: "C++", especialidade: "Desktop"}
    ]
}

// Imprimir uma frase em tela com as propriedades do objeto  itens do array

console.log(`O usuário ${developer.nome} tem ${developer.idade} anos e usa a tecnologia ${developer.tecnologias[0].nome} com especialidade em ${developer.tecnologias[0].especialidade}.`)