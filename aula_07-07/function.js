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
let result = n1 + n2
console.log(result)

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