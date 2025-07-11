let div = document.getElementById("div")
let btn = document.getElementById("btn")

div.style.width = "200px"
div.style.height = "100px"
div.style.backgroundColor = "lightgray"

btn.addEventListener("click", function(){
    div.style.backgroundColor = "yellow"
})