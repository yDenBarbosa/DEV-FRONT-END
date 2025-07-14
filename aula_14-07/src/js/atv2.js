// let celsius = document.getElementById("celsius")
// let textDigitado = document.getElementById("textDigitado")
// let conversao = document.getElementById("conversao")
// let btn = document.getElementById("btn")

// const calculo = () => celsius.value * 9 / 5 + 32 

// btn.addEventListener("click", () => {
    //     textDigitado.innerText = celsius.value
    //     conversao.innerText = calculo()
    // })
    
    let input = document.getElementById("input")
    let btn = document.getElementById("btn")
    let conversao = document.getElementById("conversao")
    let celsius1 = document.getElementById("celsius1")
    let celsius;
    
    
    const converterTemperatura = () => celsius * 9 / 5 + 32 
    
    btn.addEventListener("click", () => {
        celsius = input.value;
        celsius1.innerText = celsius;
        conversao.innerText = converterTemperatura()

    })