let titulo = document.getElementById("Titulo")
// alert(titulo)
// titulo.innerText = "Olá"
// titulo.style.color = "red"
let btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     titulo.innerText = "Troquei"
// })

// btn.addEventListener("mouseover", () => {
//     titulo.innerText = "Troquei"
// })

// btn.addEventListener("mouseout", () => {
//     titulo.innerText = "Troquei"
// })


// btn.addEventListener("mouseover", () => {
//     titulo.style.backgroundColor = "red"
// })

// btn.addEventListener("mouseout", () => {
//     titulo.style.backgroundColor = "green"
// })

document.addEventListener("keydown", (event) => {
    if(event.key == "a"){
        titulo.innerText = "Red"
    }
})