// Exercício 1 – Classificação de nota
// Utilizando a estrutura condicional (if else), exiba uma mensagem na tela, de acordo com a nota:
// 9 ou mais: “Excelente”
// Entre 7 e 9: “Bom”
// Entre 5 e 7: “Regular”
// Menor que 5: “Insuficiente”

let nota = 5

if (nota >= 9){
    console.log("Excelente!")
} else if (nota >= 7){
    console.log("Bom!")
} else if (nota >= 5){
    console.log("Regular!")
} else {
    console.log("Insuficiente!")
}

// Exercício 2 – Preço de ingresso por idade
// Utilizando a estrutura condicional (if else), exiba uma mensagem na tela, de acordo com o valor do ingresso:
// Menores de 12 anos: R$ 10
// Entre 12 e 17 anos: R$ 15
// Entre 18 e 59 anos: R$ 30
// A partir de 60 anos: R$ 20

idade = 15

if (idade < 12){
    console.log("R$ 10")
} else if (idade <= 17){
    console.log("R$ 15")
} else if (idade <= 59){
    console.log("R$ 30")
} else {
    console.log("R$ 20")
}

// Exercício 3 – Verificação de peso para corrida
// Um atleta vai participar de uma corrida, e o peso define a categoria:
// Até 60 kg:
// Até 90 kg:
// Acima de 90 kg:
// Exiba uma mensagem na tela, de acordo com o peso do atleta

let peso = 85

if (peso <= 60){
    console.log("Categoria até 60kg")
} else if (peso <= 90){
    console.log("Categoria até 90kg")
} else {
    console.log("Categoria acima de 90kg")
}

// Exercício 4 – Dia da semana
// Dado um número de 1 a 7, mostre o dia da semana correspondente:  
// 1: Domingo
// 2: Segunda
// 3: Terça
// 4: Quarta
// 5: Quinta
// 6: Sexta
// 7: Sábado
// Qualquer outro número: “Dia inválido”

let diaSemana = 5

if (diaSemana == 1){
    console.log("Domingo!")
} else if (diaSemana == 2){
    console.log("Segunda!")
} else if (diaSemana == 3){
    console.log("Terça!")
} else if (diaSemana == 4){
    console.log("Quarta!")
} else if (diaSemana == 5){
    console.log("Quinta!")
} else if (diaSemana == 6){
    console.log("Sexta!")
} else {
    console.log("Dia inválido!")
}

// Exercício 5 – Cálculo de imposto por salário
// Exiba na tela quanto de imposto o cliente vai pagar:
// Até R$ 1.500 → Isento
// De R$ 1.501 até R$ 3.000 → 10%
// De R$ 3.001 até R$ 5.000 → 15%
// Acima de R$ 5.000 → 20%

let salario = 3.001

if (salario <= 1.500){
    console.log("Isento!")
} else if (salario <= 3.000){
    console.log("Imposto de 10%")
} else if (salario <= 5.000){
    console.log("Imposto de 15%")
} else {
    console.log("Imposto de 20%")
}

// Exercício 6 – Determinação de Estação do Ano
// Dado um mês (representado por um número de 1 a 12), exiba a estação do ano correspondente no hemisfério sul. Considere as seguintes datas aproximadas de início:
// Verão: Dezembro, Janeiro, Fevereiro
// Outono: Março, Abril, Maio
// Inverno: Junho, Julho, Agosto
// Primavera: Setembro, Outubro, Novembro
// Se o número não corresponder a um mês válido, exiba "Mês inválido".

let estacao = "outubro"

if (estacao == "Dezembro" || estacao == "Janeiro" || estacao == "Fevereiro"){
    console.log("Verão")
} else if (estacao == "Março" || estacao == "Abril" || estacao == "Maio"){
    console.log("Outono")
} else if (estacao == "Junho" || estacao == "Julho" || estacao == "Agosto"){
    console.log("Inverno")
} else if (estacao == "Setembro" || estacao == "Outubro" || estacao == "Novembro" ){
    console.log("Primavera")
} else {
    console.log("Mês inválido!")
}

// Exercício 7 – Desconto de Produto por Categoria
// Uma loja oferece descontos diferentes para produtos dependendo da sua categoria. Dada a categoria do produto (representada por um número ou texto) e o preço original, calcule e exiba o preço final com o desconto aplicado.
// Eletrônicos (Categoria 'E' ou 1): 15% de desconto
// Vestuário (Categoria 'V' ou 2): 10% de desconto
// Alimentos (Categoria 'A' ou 3): 5% de desconto
// Outras Categorias: Sem desconto

let produto = "E"
let preco = 3.053
let desconto = 0
let valorFinal = 0

if (produto == "E" || produto == 1){
    desconto = 15;
    produto = "Eletônicos";
    valorFinal = preco - preco * (desconto / 100);
    console.log(`Produto selecionado: ${produto}\nValor do Produto: R$ ${preco.toFixed(2)}\nDesconto: ${desconto}%\nValor final: ${valorFinal.toFixed(2)}`)
} else if (produto == "V" || produto == 2){
    desconto = 10;
    produto = "Vestuário";
    valorFinal = preco - preco * (desconto / 100);
    console.log(`Produto selecionado: ${produto}\nValor do Produto: R$ ${preco.toFixed(2)}\nDesconto: ${desconto}%\nValor final: ${valorFinal.toFixed(2)}`)
} else if (produto == "A" || produto == 3){
    desconto = 5;
    produto = "Alimento";
    valorFinal = preco - preco * (desconto / 100);
    console.log(`Produto selecionado: ${produto}\nValor do Produto: R$ ${preco.toFixed(2)}\nDesconto: ${desconto}%\nValor final: ${valorFinal.toFixed(2)}`)
} else {
    console.log("Sem desconte!")
}

// Exercício 8 – Validação de Idade para Carteira de Motorista
// Em um país fictício, as regras para obter a carteira de motorista são as seguintes:
// Menos de 16 anos: "Não elegível para carteira de motorista."
// Entre 16 e 17 anos: "Elegível para carteira provisória."
// A partir de 18 anos: "Elegível para carteira completa."
// Exiba a mensagem correspondente à elegibilidade de uma pessoa para a carteira de motorista, dada sua idade.

let idade1 = 20 

if (idade1 < 16){
    console.log("Não elegível para carteira de motorista")
} else if (idade1 <= 17){
    console.log("Elegível para carteira provisória")
} else {
    console.log("Elegível para carteira completa")
}

// Exercício 9 – Classificação de IMC (Índice de Massa Corporal)
// O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está com o peso ideal. Dada a altura (em metros) e o peso (em quilogramas) de uma pessoa, calcule o IMC e exiba a sua classificação de acordo com a tabela abaixo:
// Fórmula do IMC: IMC=peso/(altura∗altura)
// Classificações:
// Menor que 18.5: Abaixo do peso
// Entre 18.5 e 24.9: Peso normal
// Entre 25.0 e 29.9: Sobrepeso
// Entre 30.0 e 34.9: Obesidade Grau 1
// Entre 35.0 e 39.9: Obesidade Grau 2 (severa)
// Acima de 40.0: Obesidade Grau 3 (mórbida)

let altura = 1.90
let pesoo = 120
let imc = pesoo / (altura * altura)

if (imc < 18.5){
    console.log("Abaixo do peso")
} else if (imc <= 24.9){
    console.log("Peso normal")
} else if (imc <= 29.9){
    console.log("Sobrepeso")
} else if (imc <= 34.9){
    console.log("Obesidade Grau 1")
} else if (imc <= 39.9){
    console.log("Obesidade Grau 2")
} else {
    console.log("Obesidade Grau 3")
}

// Exercício 10 – Sistema de Pontuação de Jogo
// Em um jogo, a pontuação final de um jogador é calculada com base nos pontos que ele fez e em um multiplicador de bônus, que depende da dificuldade do nível em que ele jogou. Calcule a pontuação final do jogador e exiba uma mensagem de congratulação baseada em sua performance.
// Dados de entrada:
// pontosBase: Pontos brutos que o jogador fez (número inteiro).
// nivelDificuldade: Representa a dificuldade do nível ('F' para Fácil, 'M' para Médio, 'D' para Difícil).
// Regras do multiplicador de bônus:
// Fácil ('F'): Multiplicador de 1.2
// Médio ('M'): Multiplicador de 1.5
// Difícil ('D'): Multiplicador de 2.0
// Qualquer outra entrada: Multiplicador padrão de 1.0 (sem bônus)
// Mensagens de congratulação (baseadas na pontuacaoFinal):
// Menor que 100: "Quase lá! Tente novamente para uma pontuação maior."
// Entre 100 e 500: "Bom trabalho! Você está no caminho certo."
// Acima de 500: "Parabéns! Você é um mestre no jogo!"

let pontosBase = 356
let nivelDificuldade = "D"
let pontuacaoFinal = 0

if (nivelDificuldade == "F"){
    pontuacaoFinal = pontosBase * 1.2
} else if (nivelDificuldade == "M"){
    pontuacaoFinal = pontosBase * 1.5
} else if (nivelDificuldade == "D"){
    pontuacaoFinal = pontosBase * 2.0
} else {
    pontuacaoFinal = pontosBase * 1.0
}

if (pontuacaoFinal < 100){
    console.log("Quase lá! Tente novamente para uma pontuação maior")
} else if (pontuacaoFinal <= 500){
    console.log("Bom trabalho! Você está no caminho certo")
} else {
    console.log("Parabéns! Você é um mestre no jogo")
}