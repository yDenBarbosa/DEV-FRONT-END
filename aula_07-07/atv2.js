// Ex01
// Crie uma função que diga “Olá, mundo!”  

function cumprimento(){
    console.log("Olá, mundo")
}
cumprimento()

// Ex02
// Crie uma função chamada mostrarCurso() que exibe no console: "Curso: Desenvolvimento Web com JavaScript"

function mostrarCurso(){
    console.log("Curso: Desenvolvimento Web com JavaScript!")
}
mostrarCurso()

// Ex03
// Crie uma função chamada mensagemMotivacional() que mostre no console uma frase motivacional, como:
// "Você é capaz de aprender qualquer coisa! 💪"

function mensagemMotivacional(){
    console.log("Você é capaz de aprender qualquer coisa! 💪")
}
mensagemMotivacional()

// EX04
// Crie uma função chamada dobro(numero) que receba um número como parâmetro e exiba o dobro desse número no console.

function dobro(numero){
    console.log(`O dobro de ${numero} é ${numero * 2}`)
}
dobro(30)

// EX05 
// Crie uma função chamada multiplicar que recebe dois números.  
// A função deve exibir o resultado da multiplicação.  

function multiplicar(num1, num2){
    console.log(`${num1} multiplicado por ${num2} é ${num1 * num2}`)
}
multiplicar(45, 22)

// EX06
// Crie uma função chamada mostrarAluno(nome, curso) que receba o nome de um aluno e o curso dele.
// A função deve exibir: "Aluno: [nome] | Curso: [curso]"

function mostrarAluno(aluno, curso){
    console.log(`Aluno: ${aluno} | Curso: ${curso}`)
}
mostrarAluno("Weverton", "Astronauta")