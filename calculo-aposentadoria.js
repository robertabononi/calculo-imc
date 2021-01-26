// Criação de constantes para armazenar valores

const nome = `Carla`
const sexo = `F`
const idade = 55
const contribuicao = 37

// Calculo para verificar se a pessoa está apta ou não para se aposentar

const mulherAposentada = sexo == `F` && contribuicao >= 30 && (idade + contribuicao >= 85);
const homemAposentado = sexo == `M` && contribuicao >= 35 && (idade + contribuicao >= 95);

// Exibir mensagem de acordo com o resultado

if (mulherAposentada || homemAposentado) {
     console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}