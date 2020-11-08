const input = require('readline-sync')

// Programa que recebe um número de 1 a 10 digitado pelo usuário e imprime a Tabuada do número informado.
// Todo número multiplicado por zero é igual a zero. Por isso, não o incluímos.

const num = input.question("Informe um numero ente 1 a 10 : ")
if (num > 10 || num <= 0){
    console.log("     === Opcao inválida ====")
    console.log(" === Só aceita número de 1 a 10 ===")
} else {

for(let i = 0 ; i <= 10; i++)
    console.log( num, "X",  i , " = " , num * i  )
}

/*
Informe um numero ente 1 a 10 : 5
5 X 1  =  5
5 X 2  =  10
5 X 3  =  15
5 X 4  =  20
5 X 5  =  25
5 X 6  =  30
5 X 7  =  35
5 X 8  =  40
5 X 9  =  45
5 X 10  =  50

Resposta caso usuário entre com número 0:

Informe um numero ente 1 a 10 : 0
     === Opcao inválida ====
 === Só aceita número de 1 a 10 ===


*/