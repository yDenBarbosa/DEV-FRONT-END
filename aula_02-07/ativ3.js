// Exercício 1 - Verificando Nota Escolar
// Crie uma variável nota e atribua um valor entre 0 e 10.  
// Se nota >= 5, exiba "Aprovado!".
// Se nota < 5, exiba "Reprovado".

// let nota = 7

// if (nota >= 5){
//     console.log("Aprovado!")
// } else{
//     console.log("Reprovado!")
// }

// Exercício 2 - Verificando maioridade
// Crie uma variável idade.  
// Se for maior ou igual a 18, exiba "Maior de idade".  
// Senão, exiba "Menor de idade".

// let idade = 48

// if (idade >= 18){
//     console.log("Maior de idade!")
// }else{
//     console.log("Menor de idade")
// }

// Exercício 3 – Verificando acesso com senha
// Crie uma variável senha.
// Se for igual a "1234", exiba "Acesso liberado".
// Caso contrário, exiba "Senha incorreta".

// const senha = 1234

// if (senha == 1234){
//     console.log("Acesso liberado!")
// } else{
//     console.log("Senha incorreta")
// }

// Exercício 4 – Compra mínima com condição extra
// Crie duas variáveis:  
// valorCompra
// clienteVip (booleano)  
// Se a compra for maior ou igual a 100 ou o cliente 
// for VIP, exiba "Desconto aplicado". Senão, exiba "Sem desconto".

// let valorCompra = 2.500
// let clienteVip = true

// if (valorCompra >= 100 || clienteVip == true){
//     console.log("Desconto aplicado!")
// }else {
//     console.log("Sem desconto!")
// }

// Exercício 5 – Acesso ao sistema com duas condições
// Crie duas variáveis:  
// usuarioAtivo (booleano)  
// senhaCorreta (booleano)  
// O acesso é liberado somente se o usuário estiver ativo e a senha estiver correta.

// let usuarioAtivo = true
// let senhaCorreta = false

// if (usuarioAtivo == true && senhaCorreta == true){
//     console.log("Acesso liberado!")
// } else {
//     console.log("Acesso negado!")
// }

// Exercício 6 – Cadastro completo (nível desafiador)
// Crie três variáveis:  
// nome (texto)
// email (texto)
// idade (número)
// Se o nome e o email não estiverem vazios e a idade for maior ou igual a 18, exiba "Cadastro válido".

// let nome = "Denis"
// let email = "denis.aluno@senai.com"
// let idade1 = 13

// if (nome != null && email != null && idade1 >= 18){
//     console.log("Cadastro válido!")
// }else {
//     console.log("Cadastro incompleto")
// }

// Exercício 7 – Dia da Semana
// Crie uma variável diaSemana e atribua um número de 1 a 7.
// Se for 1, exiba "Domingo".
// Se for 2, exiba "Segunda-feira".
// E assim por diante, até 7 para "Sábado".
// Se o número não estiver entre 1 e 7, exiba "Número inválido".

// let diaSemana = 5

// if (diaSemana == 1){
//     console.log("Domingo!")
// } else if (diaSemana == 2){
//     console.log("Segunda!")
// } else if (diaSemana == 3){
//     console.log("Terça!")
// } else if (diaSemana == 4){
//     console.log("Quarta!")
// } else if (diaSemana == 5){
//     console.log("Quinta!")
// } else if (diaSemana == 6){
//     console.log("Sexta!")
// } else {
//     console.log("Número inválido!")
// }

// Exercício 8 – Verificando Par ou Ímpar
// Crie uma variável numero.
// Se o número for par, exiba "É par".
// Caso contrário, exiba "É ímpar".

// let numero = 8

// if (numero % 2 == 0){
//     console.log("É par!")
// } else {
//     console.log("É impar!")
// }

// Exercício 9 – Categoria por Idade
// Crie uma variável idade.
// Se a idade for menor que 12, exiba "Criança".
// Se a idade estiver entre 12 e 17 (inclusive), exiba "Adolescente".
// Se a idade for igual ou maior que 18, exiba "Adulto".

// let idade = 18

// if (idade < 12){
//     console.log("Criança")
// } else if (idade <= 17){
//     console.log("Adolescente")
// } else {
//     console.log("Adulto")
// }

// Nível Intermediário
// Exercício 10 – Calculando Frete
// Crie duas variáveis: valorProduto e regiaoEnvio (string).
// Se o valorProduto for maior que 200, o frete é grátis. Exiba "Frete grátis".
// Se o valorProduto for menor ou igual a 200:
// Se a regiaoEnvio for "Sudeste", o frete é de R$ 15,00.
// Se a regiaoEnvio for "Nordeste", o frete é de R$ 25,00.
// Para outras regiões, o frete é de R$ 30,00.
// Exiba o valor do frete.

// let valorProduto = 200
// let regiaoEnvio = "Leste"

// if (valorProduto > 200){
//     console.log("Frete grátis")
// } else if (regiaoEnvio == "Sudeste"){
//     console.log("Frete de R$ 15,00")
// } else if (regiaoEnvio == "Nordeste"){
//     console.log("Frete de R$ 25,00")
// } else {
//     console.log("Frete de R$ 30,00")00
// }

// Exercício 11 – Status de Pedido
// Crie uma variável statusPedido (string).
// Se statusPedido for "processando", exiba "Seu pedido está sendo preparado".
// Se statusPedido for "enviado", exiba "Seu pedido está a caminho".
// Se statusPedido for "entregue", exiba "Seu pedido foi entregue".
// Para qualquer outro status, exiba "Status de pedido desconhecido".

// let statusPedido = "batata"

// if (statusPedido == "processando"){
//     console.log("Seu pedido está sendo preparado")
// } else if (statusPedido == "enviado"){
//     console.log("Seu pedido está a caminho")
// } else if (statusPedido == "entregue"){
//     console.log("Seu pedido foi entregue")
// } else {
//     console.log("Status de pedido desconhecido")
// }

// Exercício 12 – Votação
// Crie uma variável idade.
// Se a idade for menor que 16, exiba "Não pode votar".
// Se a idade estiver entre 16 e 17 (inclusive) ou for maior que 70, exiba "Voto facultativo".
// Se a idade estiver entre 18 e 70 (inclusive), exiba "Voto obrigatório".

let idade = 80

if (idade < 16){
    console.log("Não pode votar")
} else if (idade <= 17 || idade > 70){
    console.log("Voto facultativo")
} else {
    console.log("Voto obrigatório")
}

// Exercício 13 – Classificação de Triângulos
// Crie três variáveis: ladoA, ladoB, ladoC (números que representam os lados de um triângulo).
// Primeiro, verifique se os valores podem formar um triângulo (a soma de dois lados deve ser maior que o terceiro lado). Se não puder, exiba "Não é um triângulo válido".
// Se for um triângulo válido:
// Se todos os lados forem iguais, exiba "Triângulo Equilátero".
// Se dois lados forem iguais, exiba "Triângulo Isósceles".
// Se todos os lados forem diferentes, exiba "Triângulo Escaleno".

let ladoA = 1
let ladoB = 5
let ladoC = 4

if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA){
    console.log("Não é um triângulo válido")
} else if (ladoA == ladoB && ladoA == ladoC){
    console.log("Triângulo Equilátero")
} else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
    console.log("Triângulo Isósceles")
} else {
    console.log("Triângulo Escaleno")
}

// Exercício 14 – Sistema de Login Completo
// Crie três variáveis: usuarioDigitado (string), senhaDigitada (string) e usuarioBloqueado (booleano).
// Considere que o usuário e senha corretos são "admin" e "admin123".
// Se usuarioBloqueado for True, exiba "Sua conta está bloqueada".
// Caso contrário:
// Se usuarioDigiado for igual a "admin" e senhaDigitada for igual a "admin123", exiba "Login bem-sucedido!".
// Caso contrário, exiba "Usuário ou senha incorretos".

let usuarioDigiado = "admin"
let senhaDigitada = "admin123"
let usuarioBloqueado = false

if (usuarioBloqueado == true){
    console.log("Sua conta está bloqueada!")
} else if (usuarioDigiado == "admin" && senhaDigitada == "admin123"){
    console.log("Login bem-sucedido!")
} else {
    console.log("Usuário ou senha incorretos.")
}

// Exercício 15 – Desconto Progressivo
// Crie duas variáveis: quantidadeItens (número) e precoUnitario (número).
// Calcule o valorTotal (quantidadeItens * precoUnitario).
// Aplique os seguintes descontos:
// Se quantidadeItens for menor que 5, sem desconto.
// Se quantidadeItens estiver entre 5 e 9 (inclusive), 5% de desconto.
// Se quantidadeItens for 10 ou mais, 10% de desconto.
// Exiba o valorTotal com o desconto aplicado.

let quantidadeItens = 11
let precoUnitario = 55
let valorTotal = precoUnitario * quantidadeItens

if (quantidadeItens < 5){
    console.log("Sem desconto!")
} else if (quantidadeItens <= 9){
    valorTotal = valorTotal - valorTotal * (5/100)
    console.log(`Valor total com desconto de 5%: ${valorTotal.toFixed(2)}`)
} else {
    valorTotal = valorTotal - valorTotal * (10/100)
    console.log(`Valor total com desconto de 10%: ${valorTotal.toFixed(2)}`)
}

// Exercício 16 – Verificação de Ano Bissexto
// Crie uma variável ano.
// Um ano é bissexto se for divisível por 400.
// Ou se for divisível por 4 E não for divisível por 100.
// Exiba "Ano bissexto" ou "Não é ano bissexto".

let ano = 2024

if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0){
    console.log("Ano bissexto")
} else {
    console.log("Não é ano bissexto")
}