let div1 = document.getElementById("div1")

div1.style.backgroundColor = "gray"

div1.addEventListener("mouseover", () => {
    div1.style.backgroundColor = "aqua"
})

div1.addEventListener("mouseout", () => {
    div1.style.backgroundColor = "gray"
})


let div2 = document.getElementById("div2")
let paragrafo = document.getElementById("paragrafo")

div2.addEventListener("mouseover", () => {
    paragrafo.innerText = "Mouse detectado!"
})

div2.addEventListener("mouseout", () => {
    paragrafo.innerText = ""
})

let div3 = document.getElementById("div3")

div3.style.fontSize = "100px"

div3.addEventListener("mouseover", () => {
    div3.style.fontSize = "300px"
})

div3.addEventListener("mouseout", () => {
    div3.style.fontSize = "100px"
})