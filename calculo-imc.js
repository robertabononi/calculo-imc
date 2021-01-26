// Criação de constantes para armazenar valores

const nome = `Roberta`;
const peso = 72;
const altura = 1.61;

// Criação da constante IMC

const imc = peso / (altura * altura)

//Exibir mensagens de acordo com o resultado

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso.`)
} else {
    console.log(`${nome}, você não está acima do peso.`)
}