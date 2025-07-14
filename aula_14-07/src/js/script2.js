let input = document.getElementById("input")
let btn = document.getElementById("btn")
let textoDigitado = document.getElementById("text-digitado")

btn.addEventListener("click", () => {
    textoDigitado.innerText = input.value
})