const input = require("readline-sync")
/*
Escreva um programa que recebe um valor inserido pelo usuário e imprime na tela os números até o valor digitado
*/
const number = input.question("Digite um numero para o valor final do loop : ")

for (let i = 1; i <= number; i++){
    console.log(i)
}