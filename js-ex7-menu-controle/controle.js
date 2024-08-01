/*
Escreva um programa em javascript que comece perguntando pela quantidade 
inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar 
e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar 
pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu 
com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o 
valor. A opção de sair deve encerrar o programa.
*/

let quantMoney = parseFloat(prompt("Quanto dinheiro você tem?"))
let menu
let variable = 0

do{
    menu = prompt("Você tem R$" + quantMoney + ". O que deseja fazer com esse valor? \n1- Adicionar dinheiro \n2- Remover dinheiro \n3- Encerrar")
    switch (menu){
        case "1":
            variable = parseFloat(prompt("Quanto você deseja adicionar?"))
            quantMoney+=variable
            break
        case "2":
            variable = parseFloat(prompt("Quanto você deseja retirar?"))
            quantMoney-=variable
            break
    }
} while(menu !== "3")

alert("Você encerrou o menu de controle financeiro!")