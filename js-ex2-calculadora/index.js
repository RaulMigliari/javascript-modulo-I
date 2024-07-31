let num1
let num2

num1 = window.prompt("Digite o primeiro valor: ")
num2 = window.prompt("Digite o segundo valor: ")

let x = parseFloat(num1)
let y = parseFloat(num2)

alert(
    "Resultados" +
    "\nSoma: " + (x+y) +
    "\nSubtração: " + (x-y) +
    "\nDivisão: " + (x/y) +
    "\nMultiplicação: " + (x*y)
)