// console.log("1. Inciando")

// setTimeout(() => {
//     console.log("2. Executando") 
// }, 2000)

// console.log("3. Terminando")

// let nome

// setTimeout(() => {
//     nome = "Mateus"
// }, 2000)

// console.log(nome)

// function pedirComida(){
//     setTimeout(() => {
//         console.log("Pedindo comida")
//     }, 2000);
// }

// function comendoComida(){
//     console.log("Comendo comida")
// }

// pedirComida()
// comendoComida()

function sabor(p){
    console.log(`O sabor é: ${p}`)
}

sabor("Mussarela")

function assarPizza(callback){
    setTimeout(() => {
        console.log("🍕 Pizza Pronta")
        callback()
    }, 2000);
}

function comerPizza(){
    console.log("Comendo a Pizza")
}

console.log("Preparando a pizza")
assarPizza(comerPizza)