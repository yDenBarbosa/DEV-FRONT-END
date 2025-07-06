// Exercício 1 - Contador de 1 a 10
// Crie um laço for que conte de 1 até 10 e exiba os números no console.  

for (let i = 1; i <= 10; i++){
    console.log(i)
}

// Exercício 2 - Mostrar os números pares de 0 a 20
// Use o for para mostrar apenas os números pares de 0 até 20. 

for (let i = 0; i <= 20; i++){
    console.log(i)
}

// Exercício 3 - Contar de 10 até 1 (de trás pra frente)
// Mostre no console os números de 10 até 1, um por linha.  

for (let i = 10; i >= 1; i -= 1){
    console.log(i)
}

// Exercício 4 - Tabuada do 5
// Crie um for que mostre a tabuada do 5, do 5 x 1 até o 5 x 10.  

for (let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5*i}`)
}

// Exercício 5 - Somar os números de 1 até 100
// Some todos os números de 1 a 100 usando for.
// No final, mostre o total no console. (Resposta: 5050)

let soma = 0
for (let i = 1; i <= 100; i++){
    soma += i
}
console.log(soma)

// Exercício 6 - Contando Múltiplos de 3
// Crie um laço for que conte de 1 a 30 e exiba apenas os números que são múltiplos de 3.

for (let i = 3; i <= 30; i += 3){
    console.log(i)
}

// Exercício 7 - Calculando Fatorial
// Escreva um laço for que calcule o fatorial de um dado número (por exemplo, se o número for 5, calcule 5!=5×4×3×2×1).
// Escolha um número como 7 para testar. Exiba o resultado final no console.

let fatorial = 7
for (let i = 6; i >= 1; i -= 1){
    fatorial *= i
}
console.log(fatorial)

// Exercício 8 - Números Pares Invertidos
// Use um laço for para exibir todos os números pares de 50 até 2, um por linha.

for (let i = 50; i >= 2; i -= 2){
    console.log(i)
}

// Exercício 9 - Soma dos Números Ímpares
// Calcule a soma de todos os números ímpares entre 1 e 50 (inclusive). Exiba a soma total no console no final.

let somaImpar = 0
for (let i = 1; i <= 50; i++){
    if (i % 2 != 0){
        somaImpar += i
    }
}

// for (let i = 1; i <= 50; i += 2){
//     somaImpar +=i
// }

console.log(somaImpar)

// Exercício 10 - Tabuada Personalizada
// Peça ao usuário para inserir um número. Em seguida, use um laço for para exibir a tabuada desse número, de 1 até 12.
// Por exemplo, se o usuário digitar 7, mostre "7×1=7", "7×2=14", e assim por diante, até "7×12=84".

let numero = 8

for (let i = 1; i <= 12; i++){
    console.log(`${numero} x ${i} = ${numero * i}`)
}