// Armazenar um array de usuários (objetos)

const usuarios = [
    {nome: "Carlos", tecnologias: ["HTML", "CSS"]},
    {nome: "Jasmine", tecnologias:["JavaScript", "CSS"]},
    {nome: "Tuane", tecnologias: ["HTML", "Node.js"]}
]

// Percorrer a lista de usuários com estrutura de repetição imprimindo informações dos usuários na tela

for (i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}