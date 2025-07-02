// Exercício 1 - Verificando Nota Escolar
// Crie uma variável nota e atribua um valor entre 0 e 10.  
// Se nota >= 5, exiba "Aprovado!".
// Se nota < 5, exiba "Reprovado".

let nota = 7

if (nota >= 5){
    console.log("Aprovado!")
} else{
    console.log("Reprovado!")
}

// Exercício 2 - Verificando maioridade
// Crie uma variável idade.  
// Se for maior ou igual a 18, exiba "Maior de idade".  
// Senão, exiba "Menor de idade".

let idade = 48

if (idade >= 18){
    console.log("Maior de idade!")
}else{
    console.log("Menor de idade")
}

// Exercício 3 – Verificando acesso com senha
// Crie uma variável senha.
// Se for igual a "1234", exiba "Acesso liberado".
// Caso contrário, exiba "Senha incorreta".

const senha = 1234

if (senha == 1234){
    console.log("Acesso liberado!")
} else{
    console.log("Senha incorreta")
}

// Exercício 4 – Compra mínima com condição extra
// Crie duas variáveis:  
// valorCompra
// clienteVip (booleano)  
// Se a compra for maior ou igual a 100 ou o cliente 
// for VIP, exiba "Desconto aplicado". Senão, exiba "Sem desconto".

let valorCompra = 2.500
let clienteVip = true

if (valorCompra >= 100 || clienteVip == true){
    console.log("Desconto aplicado!")
}else {
    console.log("Sem desconto!")
}

// Exercício 5 – Acesso ao sistema com duas condições
// Crie duas variáveis:  
// usuarioAtivo (booleano)  
// senhaCorreta (booleano)  
// O acesso é liberado somente se o usuário estiver ativo e a senha estiver correta.

let usuarioAtivo = true
let senhaCorreta = false

if (usuarioAtivo == true && senhaCorreta == true){
    console.log("Acesso liberado!")
} else {
    console.log("Acesso negado!")
}

// Exercício 6 – Cadastro completo (nível desafiador)
// Crie três variáveis:  
// nome (texto)
// email (texto)
// idade (número)
// Se o nome e o email não estiverem vazios e a idade for maior ou igual a 18, exiba "Cadastro válido".

let nome = "Denis"
let email = "denis.aluno@senai.com"
let idade1 = 13

if (nome != null && email != null && idade1 >= 18){
    console.log("Cadastro válido!")
}else {
    console.log("Cadastro incompleto")
}