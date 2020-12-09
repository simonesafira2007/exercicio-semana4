const input = require('readline-sync')

//Programa que recebe três valores do usuário ediz seé um triângulo equilatero, escaleno ou escaleno
/*
Triângulo escaleno:   todos os lados possuem medidas diferentes; 
Isósceles : quando dois lados possuem a mesma medida; 
Equilátero, quando todos os lados são iguais.
*/
const A = input.question("Entre com valor do primeiro lado :")
const B = input.question("Entre com valor do segundo lado :")
const C = input.question("Entre com valor do terceiro lado :")

if ( A == B  &   A == C   &   B == C ) {
    console.log("EQUILATERO")
} else if ( A != B   &    A != C   &   B != C ){
    console.log("ESCALENO")
}else {
    console.log("ISOCELES"
    )

}
/*
Entre com valor do primeiro lado :6
Entre com valor do segundo lado :7
Entre com valor do terceiro lado :2
ESCALENO

Entre com valor do primeiro lado :5
Entre com valor do segundo lado :5
Entre com valor do terceiro lado :5
EQUILATERO

Entre com valor do primeiro lado :6
Entre com valor do segundo lado :6
Entre com valor do terceiro lado :4
ISOCELES
*/