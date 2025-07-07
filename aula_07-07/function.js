// function nomeDaFuncao (){

// }

function dizerOla(){
    console.log("Olá!")
}
dizerOla() //ja possui um console.log dentro da função


function boasVindas(){
    console.log("Seja bem-vindo!")
}
boasVindas()


function fazerSuco(){
    console.log("Fazendo suco de laranja!")
}
fazerSuco()


//--------------------- Function with parametro -----------------------//

function fazerSuco(suco){
    console.log(`Fazendo suco de ${suco}!`)
}
fazerSuco("Uva")
fazerSuco("Morango")

let n1 = 25
let n2 = 19
let result1 = n1 + n2
console.log(result1)

let n3 = 10
let n4 = 51
let result2 = n3 + n4
console.log(result2)

let n5 = 1
let n6 = 29
let result3 = n5 + n6
console.log(result3)

function somar(p1, p2){
    console.log(`Resultado da soma: ${p1 + p2}`)
}
somar(29, 5)


// console.log("Começando")

// setTimeout(function(){
//     console.log("Terminando")
// }, 2000)



function dobro(numero){
    return numero * 2
}

let result = dobro(2)
console.log(result)

function quadrado(numero){
    return numero * numero
}
console.log(quadrado(4))


//------------------------ Arrow Functions -----------------------------//

// const dobrar = (numero) =>{
//     console.log(numero * 2)
// }

// dobrar(10)

const dobrar = (n) => n * 2
let resultado1 = dobrar(6)
console.log(resultado1)

const texto = (tx) => console.log(`Saia ${tx}`)
texto("Primata")