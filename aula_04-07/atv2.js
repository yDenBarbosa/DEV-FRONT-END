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
        console.log("Fevereiro!")
        break
    case 3:
        console.log("Março!")
        break
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

// Exercício 4 – Dia da Semana
// Crie um switch que, dado um número de 1 a 7, exiba o dia da semana correspondente.
// 1: Domingo
// 2: Segunda-feira
// ...
// 7: Sábado
// Qualquer outro número: “Número inválido para o dia da semana”

let dia = 6

switch (dia){
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
    default:
        console.log("Nímero inválido para o dia da semana")
}

// Exercício 5 – Estação do Ano
// Crie um switch que, dado o nome de um mês, exiba a estação do ano em que ele se encontra (simplificado para hemisfério sul).
// "Dezembro", "Janeiro", "Fevereiro": "Verão"
// "Março", "Abril", "Maio": "Outono"
// "Junho", "Julho", "Agosto": "Inverno"
// "Setembro", "Outubro", "Novembro": "Primavera"
// Qualquer outro nome: “Mês desconhecido”

let nomeMes = "Setembro"

switch (nomeMes){
    case "Dezembro":
    case "Janeiro":
    case "Fevereiro":
        console.log("Verão")
        break;
    case "Março":
    case "Abril":
    case "Maio":
        console.log("Outono")
        break;
    case "Junho":
    case "Julho":
    case "Agosto":
        console.log("Inverno")
        break;
    case "Setembro":
    case "Outubro":
    case "Novembro":
        console.log("Primavera")
        break
    default:
        console.log("Mês desconhecido")
}

// Exercício 6 – Classificação Etária de Filmes
// Crie um switch que, dada uma classificação etária (número), exiba a descrição correspondente.
// 0: "Livre para todos os públicos"
// 10: "Não recomendado para menores de 10 anos"
// 12: "Não recomendado para menores de 12 anos"
// 14: "Não recomendado para menores de 14 anos"
// 16: "Não recomendado para menores de 16 anos"
// 18: "Não recomendado para menores de 18 anos"
// Qualquer outro número: “Classificação inválida”

let classificacao = 16

switch (classificacao){
    case 0:
        console.log("Livre para todos os públicos")
        break
    case 10:
        console.log("Não recomendado para menores de 10 anos")
        break
    case 12:
        console.log("Não recomendado para menores de 12 anos")
        break
    case 14:
        console.log("Não recomendado para menores de 14 anos")
        break
    case 16:
        console.log("Não recomendado para menores de 16 anos")
        break
    case 18:
        console.log("Não recomendado para menores de 18 anos")
        break
    default:
        console.log("Classificação inválida")
}

// Exercício 7 – Tradução de Cor
// Crie um switch que, dada uma cor em inglês, exiba sua tradução para o português.
// "red": "Vermelho"
// "blue": "Azul"
// "green": "Verde"
// "yellow": "Amarelo"
// Qualquer outra cor: “Cor não traduzida”

let cor = "green"

switch (cor){
    case "red":
        console.log("Vermelho")
        break
    case "blue":
        console.log("Azul")
        break
    case "green":
        console.log("Verde")
        break
    case "yellow":
        console.log("Amarelo")
        break
    default:
        console.log("Cor não traduzida")
}

// Exercício 8 – Nível de Dificuldade de Jogo
// Crie um switch que, dado um nível de dificuldade (string), exiba uma mensagem de boas-vindas adequada.
// "fácil": "Bem-vindo(a), aventureiro(a) iniciante!"
// "normal": "Preparado(a) para a jornada, herói(ina)?"
// "difícil": "Corajoso(a) guerreiro(a), o desafio espera!"
// Qualquer outro nível: “Nível de dificuldade inválido”

let dificuldade = "normal"

switch (dificuldade){
    case "fácil":
        console.log("Bem-vindo(a), aventureiro(a) iniciante!")
        break
    case "normal":
        console.log("Preparado(a) para a jornada, herói(ina)?")
        break
    case "difícil":
        console.log("Corajoso(a) guerreiro(a), o desafio espera!")
        break
    default:
        console.log("Nível de dificuldade inválido")
}

// Exercício 9 – Formato de Arquivo
// Crie um switch que, dada a extensão de um arquivo, exiba o tipo de arquivo.
// "doc", "docx": "Documento de Texto"
// "xls", "xlsx": "Planilha Eletrônica"
// "ppt", "pptx": "Apresentação"
// "jpg", "png", "gif": "Imagem"
// "mp3", "wav": "Áudio"
// "mp4", "avi": "Vídeo"
// Qualquer outra extensão: “Tipo de arquivo desconhecido”

let extensao = "jpg"

switch (extensao){
    case "doc":
    case "docx":
        console.log("Documento de Texto");
        break;
    case "xls":
    case "xlsx":
        console.log("Planilha Eletrônica");
        break;
    case "ppt":
    case "pptx":
        console.log("Apresentação");
        break;
    case "jpg":
    case "png":
    case "gif":
        console.log("Imagem");
        break;
    case "mp3":
    case "wav":
        console.log("Áudio");
        break;
    case "mp4":
    case "avi":
        console.log("Vídeo");
        break;
    default:
        console.log("Tipo de arquivo desconhecido");
}

// Exercício 10 – Avaliação de Produto
// Crie um switch que, dada uma nota de avaliação (1 a 5), exiba a descrição da avaliação.
// 1: "Muito Ruim"
// 2: "Ruim"
// 3: "Regular"
// 4: "Bom"
// 5: "Excelente"
// Qualquer outro número: “Nota inválida”

let nota = 5

switch (nota){
    case 1:
        console.log("Muito Ruim")
        break
    case 2:
        console.log("Ruim")
        break
    case 3:
        console.log("Regular")
        break
    case 4:
        console.log("Bom")
        break
    case 5:
        console.log("Excelente")
        break
    default:
        console.log("Nota inválida")
}