/* 
Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). 
O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de 
multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. 
Depois o programa deve exibir esses resultados e finalizar.
*/

let num = prompt("Qual número deseja saber a tabuada: (De 1 a 20)")
let tabuada = ""

for (i=0; i<=10; i++){
    console.log(num*i)
    tabuada += num*i + " "
}
alert("Tabuada do " + num + ": " + tabuada)