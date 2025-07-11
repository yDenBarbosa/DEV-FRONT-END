//--------------- Primeira chamada ---------------//

// let elemento = document.getElementById("nomeDoID")
let elemento = document.getElementById("titulo")
let elemento2 = document.getElementById("titulo2")
let elemento3 = document.getElementById("titulo3")
let paragrafo = document.getElementById("paragrafo")
let paragrafo2 = document.getElementById("paragrafo2")

console.log(elemento)
console.log(elemento2)
console.log(elemento3)

//---------------------- Segunda chamada--------------------------//

let p1 = document.getElementsByClassName("p1")
let p2 = document.getElementsByClassName("p2")

console.log(p1)
console.log(p2)

let tituloSegundo = document.getElementById("tituloSegundo")

tituloSegundo.innerText = "Troquei"
tituloSegundo.style.color = "blue"
tituloSegundo.style.fontSize = "90px"
tituloSegundo.style.backgroundColor = "green"
tituloSegundo.style.border = "2px dashed white"

document.body.style.backgroundColor = "orange"
// console.log(tituloSegundo)

// let lista = document.getElementById("lista")
// console.log(lista)

// lista.innerText = "Teste"
