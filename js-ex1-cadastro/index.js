let primeiroNome
let sobrenome
let campoDeEstudo
let anoDeNascimento

primeiroNome = window.prompt("Digite seu primeiro nome: ")
sobrenome = window.prompt("Digite seu sobrenome: ")
campoDeEstudo = window.prompt("Digite seu campo de estudo: ")
nascimento = window.prompt("Digite o ano do seu nascimento")
parseFloat(nascimento)

console.warn("Informações do recruta: ")
console.log("Primeiro nome:", primeiroNome)
console.log("Sobrenome:", sobrenome)
console.log("Campo de estudo:", campoDeEstudo)
console.log("Idade", 2024-nascimento)

alert(
    "Recruta cadastrado!" +
    "\nPrimeiro nome: " + primeiroNome +
    "\nSobrenome: " + sobrenome +
    "\nCampo de estudo:  " + campoDeEstudo +
    "\nIdade: " + (2024-nascimento)
)