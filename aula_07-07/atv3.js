// EX1 - Criando uma Arrow Function para Multiplicação
// - Crie uma arrow function chamada `multiplicar` que recebe dois números. 
// - Ela deve retornar a multiplicação dos dois valores. 
// - Teste chamando `multiplicar(7, 3)`.

const multiplicar = (n1, n2) => console.log(`${n1} multiplicado por ${n2} é ${n1 * n2}`)
multiplicar(3,3)

// EX2 - Verificar se a idade é maior ou menor de idade
// Crie uma arrow function chamada verificarIdade que receba uma idade como parâmetro e :
// "Maior de idade" se for 18 ou mais
// "Menor de idade" caso contrário

// const verificarIdade = (idade) => {
//     if (idade >= 18){
//         console.log("Maior de idade")
//     } else {
//         console.log("Menor de idade")
//     }
// }

const verificarIdade = (idade) => idade >= 18 ? "Maior de idade" : "Menor de idade"


verificarIdade(71)