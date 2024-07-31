/*
Escreva um programa em javascript que funcione como um conversos de medidas. 
O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)
O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)
*/

const initialValue = parseFloat(prompt("Digite o valor (em metros) que deseja em converter: "))
const finalValue = prompt("Escolha para qual unidade de medida você deseja converter: \nmm \ncm \ndm \ndam \nhm \nkm")

switch(finalValue){
    case "mm":
        alert("O valor é igual a " + (initialValue*1000))
        break
    case "cm":
        alert("O valor é igual a " + (initialValue*100))
        break
    case "dm":
        alert("O valor é igual a " + (initialValue*10))
        break
    case "dam":
        alert("O valor é igual a " + (initialValue/10))
        break
    case "hm":
        alert("O valor é igual a " + (initialValue/100))
        break
    case "km":
        alert("O valor é igual a " + (initialValue/1000))
        break
    default:
        alert("Opção inválida!")
        break
}