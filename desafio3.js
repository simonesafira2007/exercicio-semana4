/*

 Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
• Esse funcionário foi contratado em 2010, com salário inicial de R$1000,00;
• Em 2011 recebeu aumento de 1,5% sobre seu salário inicial;
• A partir de 2012 (inclusive), os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior

Faça um programa que determine o salário atual desse funcionário.
*/

const salario2010 = 1000
const valorDoReajuste2010 = salario2010 * (1.5/100) 
const valorSalarioFinal2O11 = salario2010 + valorDoReajuste2010
const valorDoReajuste2012 = valorSalarioFinal2O11 * (3/100)
const salario2012 = valorSalarioFinal2O11 + valorDoReajuste2012


console.log(`O valor do salario de 2010 foi : R$ ${salario2010}`)  
console.log(`O valor do reajuste de 1.5% sobre o valor do salario de 2010 de R$ ${salario2010} foi : R$ ${valorDoReajuste2010}`)
console.log(`O valor do salario final de 2011 foi : R$ ${valorSalarioFinal2O11}`)  
console.log(`O valor do reajuste de 3% sobre o salario do ano de 2011 de R$ ${valorSalarioFinal2O11} foi : R$ ${valorDoReajuste2012}`)
console.log(`O valor do salario final de 2012 foi : R$ ${salario2012}`) 

/*
O valor do salario de 2010 foi : R$ 1000
O valor do reajuste de 1.5% sobre o valor do salario de 2010 de R$ 1000 foi : R$ 15
O valor do salario final de 2011 foi : R$ 1015
O valor do reajuste de 3% sobre o salario do ano de 2011 de R$ 1015 foi : R$ 30.45
O valor do salario final de 2012 foi : R$ 1045.45
*/  