// Ex01 - Contar de 1 até 10
// Use while para contar de 1 a 10 e mostrar no console.

// let contar = 1
// while (contar <= 10){
//     console.log(contar)
//     contar++
// }

// Ex02 - Mostrar apenas números pares de 2 até 20
// Use while com incremento de 2 em 2.

// let pares = 2
// while (pares <= 20){
//     console.log(pares)
//     pares += 2
// }

// Ex03 - Contar de 50 até 0 (decrescente)
// Mostre os números de 50 até 0, diminuindo de 5 em 5.  

// let contar2 = 50
// while (contar2 >= 0){
//     console.log(contar2)
//     contar2 -= 5
// }

// Ex04 - Simular tentativas até acertar a senha
// Crie uma variável tentativa, e simule até ela ser igual à senha correta ("admin").
// A cada tentativa, mostre “Senha incorreta”.

// let tentativa = prompt("Digite a senha:")
// let senha = "boa"
// while (tentativa != senha){
//     alert("Senha incorreta!")
//     tentativa = prompt("Digite a senha:")
// }

// Exercício 05 - Soma de Números
// Objetivo: Calcular a soma dos números de 1 até um determinado limite.
// Instruções: Crie uma variável limite (por exemplo, defina como 10). Use um loop while para somar todos os números de 1 até o limite e, em seguida, imprima a soma total no console.

// let limite = 10
// while(limite >= 0){
//     console.log(limite)
//     limite -= 1
// }

// Exercício 06 - Contagem Regressiva com Mensagem
// Objetivo: Criar uma contagem regressiva e exibir uma mensagem no final.
// Instruções: Use um loop while para fazer uma contagem regressiva de 10 até 1. Após o loop terminar, imprima "Decolar!" no console.

let contagem = 10
while (contagem >= 0){
    contagem == 0 ? console.log("Decolar!") : console.log(contagem)
    contagem -= 1
}