/*
Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem 
dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
*/

const car1 = prompt("Nome do primeiro carro: ")
const vel1 = prompt("Velocidade do primeiro carro: ")
const x = parseFloat(vel1)

const car2 = prompt("Nome do segundo carro: ")
const vel2 = prompt("Velocidade do segundo carro: ")
const y = parseFloat(vel2)

if (x > y){
    alert("O carro " + car1 + " é mais rápido")
} else if (x === y) {
    alert("Os dois carros tem a mesma velocidade")
} else {
    alert("O carro " + car2 + " é mais rápido")
}