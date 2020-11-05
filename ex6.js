const input = require('readline-sync')

// Programa que recebe um número de 1 a 10 digitado pelo usuário e imprime a Tabuada do número informado.
// Todo número multiplicado por zero é igual a zero. Por isso, não o incluímos.

const num = input.question("Informe um numero ente 1 a 10 : ")
if (num > 10 || num <= 0){
    console.log("     === Opcao inválida ====")
    console.log(" === Só aceita número de 1 a 10 ===")
} else {

for(let i = 1 ; i <= 10; i++)
    console.log( num, "X",  i , " = " , num * i  )
}

