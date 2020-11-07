const input = require('readline-sync')

/* Ler o número de alunos de uma turma, ler as notas destes alunos e calcular a média
aritmética destes alunos.
 */

 cont = 0
 soma = 0

 while (cont < 3 ){
     const valor = input.question("informe um valor : ?")
     soma = soma + valor
     cont = cont + 1
}
media = soma/ cont 
console.log(" A média aritmética dos alunos foi : ", media.toFixed(2))//valor não correto. rever