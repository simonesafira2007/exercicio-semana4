const input = require('readline-sync')

// Programa que recebe um número digitado pelo usuário e imprime a Tabuada do número informado

const num = input.question("Informe um numero de 1 a 10 : ")
if (num > 10) {
    console.log("     === Opcao inválida ====")
    console.log(" === Só aceita número de 1 a 10 ===")
} else {

for(let i = 1 ; i <= 10; i++){
    console.log( num, "X",  i , " = " , num * i  )
}
}
