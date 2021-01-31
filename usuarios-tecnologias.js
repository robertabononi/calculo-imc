// Armazenar um array de usuários (objetos)

const usuarios = [
    {nome: "Carlos", tecnologias: ["HTML", "CSS"]},
    {nome: "Jasmine", tecnologias:["JavaScript", "CSS"]},
    {nome: "Tuane", tecnologias: ["HTML", "Node.js"]}
]

// Percorrer a lista de usuários com estrutura de repetição imprimindo informações dos usuários na tela

//  for (let i = 0; i < usuarios.length; i++) {
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
// }

// Criar função que retorna SE o usuário trabalha com determinada tecnologia

function checarSeUsuarioUsaCSS(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if(usuario.tecnologias[i] == "CSS") {
            return true
        }
    }
    
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    let resultado = checarSeUsuarioUsaCSS(usuarios[i])
    console.log(`${usuarios[i].nome} usa CSS: ${resultado}`)
}