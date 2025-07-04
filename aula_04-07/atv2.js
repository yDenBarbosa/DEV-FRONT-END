// Exercício 1 – Traduzindo o número do mês
// Crie um switch que, dado o número do mês (1 a 3), exiba:
// 1: Janeiro
// 2: Fevereiro
// 3: Março
// Qualquer outro número: “Mês inválido”

let mes = 2

switch (mes){
    case 1:
        console.log("Janeiro!")
        break
    case 2:
        console.log("Fevereiro")
    case 3:
        console.log("Março!")
    default:
        console.log("Mês inválido!")
}

// Exercício 2 – Tipo de usuário
// Um sistema possui 3 tipos de usuários:
// "admin": acesso total
// "editor": acesso limitado
// "visitante": acesso somente leitura
// Use um switch para exibir a permissão com base no tipo.

let usuario = "visitante"

switch (usuario){
    case "admin":
        console.log("Acesso total!")
        break
    case "editor":
        console.log("Acesso limitado!")
        break
    case "visitante":
        console.log("Acesso somente leitura!")
        break
    default:
        console.log("Usuário inválido!")
}

// Exercício  3 – Calculadora simples
// Crie um switch para somar, subtrair, multiplicar ou dividir dois números, com base na operação ("+", "-", "*", "/").

let num1 = 56
let num2 = 48
let operador = "*"

switch (operador){
    case "+":
        console.log(num1 + num2)
        break
    case "-":
        console.log(num1 - num2)
        break
    case "/":
        console.log(num1 / num2)
        break
    case "*":
        console.log(num1 * num2)
        break
}