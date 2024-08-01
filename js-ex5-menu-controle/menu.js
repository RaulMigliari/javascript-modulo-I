/*
Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam 
de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. 
Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi 
a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. 
Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem 
dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
*/

let alternative

do{
    alternative = prompt("1- Sentir \n2- Olhar \n3- Ver \n4- Comer \n5- Encerrar")
    switch (alternative){
        case "1":
            alert("Você está sentindo!")
            break
        case "2":
            alert("Você está olhando!")
            break
        case "3":
            alert("Você está vendo!")
            break
        case "4":
            alert("Você está comendo!")
            break
    }
} while(alternative !== "5")

alert("Você encerrou o menu de sensações!")