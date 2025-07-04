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