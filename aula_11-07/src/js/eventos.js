// const alert = () => {
//     alert("Você clicou na pagina")
// }

// btn.onclick = function(){
    //     alert("Você clicou aqui")
    // }

let btn = document.getElementById("btn")
let paragrafo = document.getElementById("paragrafo")
    
// btn.addEventListener("click", function(){
//     alert("Você clicou no botão")
// })

btn.addEventListener("click", function() {
    paragrafo.style.color = "green"
    paragrafo.style.fontWeight = "700"
    paragrafo.style.fontSize = "120px"
})