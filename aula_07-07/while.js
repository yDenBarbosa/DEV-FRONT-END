// while (condiçãa){

// }

// let i = 1
// while (i <= 5){
//     console.log(`Numero: ${i}`)
//     i++
// }

let senha = "abc"
let senhaDigitada = prompt("Informe sua senha:")
while (senhaDigitada != senha){
    alert("Senha incorreta!")
    senhaDigitada = prompt("Informe sua senha:")
}