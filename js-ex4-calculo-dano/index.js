/*
Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, 
o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:
- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as 
informações atualizadas de ambos os personagens.
*/

const nomePersonagem1 = prompt("Digite o nome do primeiro personagem: ")
const poderPersonagem1 = parseFloat(prompt("Digite o poder de ataque do primeiro personagem: "))

const nomePersonagem2 = prompt("Digite o nome do segundo personagem: ")
const poderDefesa2 = parseFloat(prompt("Digite o poder de defesa do segundo personagem: "))
const pontoVida2 = parseFloat(prompt("Digite os pontos de vida do segundo personagem: "))
const escudoPersonagem2 = confirm("O personagem tem um escudo?")
console.log(escudoPersonagem2)

let ataque = poderPersonagem1 - poderDefesa2
let ataque2 = (poderPersonagem1 - poderDefesa2)/2

if (poderPersonagem1 > poderDefesa2 && escudoPersonagem2 == false){
    alert("O dano sofrido por " + nomePersonagem2 + " foi " + (poderPersonagem1 - poderDefesa2))
    alert("O personagem " + nomePersonagem2 + " ficou com "  + (pontoVida2 - ataque))
} else if (poderPersonagem1>poderDefesa2 && escudoPersonagem2 == true){
    alert("O dano sofrido por " + nomePersonagem2 + " foi " + ((poderPersonagem1 - poderDefesa2)/2))
    alert("O personagem " + nomePersonagem2 + " ficou com "  + (pontoVida2 - ataque2) + " de vida")
} else {
    alert("Não houve dano causado!")
}