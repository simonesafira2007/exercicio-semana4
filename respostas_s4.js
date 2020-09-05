
// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação com base 
// em quantas vezes a cliente visitou um estabelecimento. 
// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }

const baseClientes = {
    Clotilde: {    
      visitas: 1,
    },
    Florinda: {
      visitas: 2,
    },
    Paty: {
      visitas: 3,
    },
  }
  
  for (i = 0; i < baseClientes.length; i++){
    return (baseClients[i].visitas)
    
    }
  
  
  function saudarCliente(nome){
    if (nome === 'Clotilde') {
      return ('Olá, é a primeira vez por aqui?')
  
      } else if  (nome === 'Florinda'){
        return ('Bem-vinda, Florinda! Que bom que voltou!') 
  
      } else {
        return ('Bem-vinda mais uma vez, Paty!')
  
      }
  
    }
  
    console.log(saudarCliente('Paty'))
  
  
  
  function saudarCliente(nome){
    let  visita = nome
     if  (visita === 1) {
      return ('Olá, é a primeira vez por aqui?')
  
      }else if (visita === 2){
        return ('Bem-vinda, Florinda! Que bom que voltou!')
  
        }  else {
       
            return ('Bem-vinda mais uma vez, Paty!')
      }
  
  }
    console.log(saudarCliente(1))  
  
  
  
    function saudarClientes(nome){
      switch (nome) {
        case 'Clotilde':
          return 'Olá, é a primeira vez por aqui?';
          
        case 'Florinda' :
          return 'Bem-vinda, Florinda! Que bom que voltou!';
          
        default:
          return 'Bem-vinda mais uma vez, Paty!';
          
      }
           
    }
     
    console.log(saudarClientes('Florinda'))
  
  // EXERCÍCIOS ARRAY
    
  // 3) Crie uma função que receba um objeto como o abaixo:
  // 1ª parte da questão
  
  // const pessoa = {
  //   nome: 'Nazaré',
  //   sobrenome: 'Tedesco',
  // }
  // 2ª parte da questão
  
  // Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve retornar um 
  // novo objeto com as mesmas propriedades que o objeto recebido e mais uma propriedade, chamada 'nomeCompleto', 
  // cujo valor é uma string com o nome e sobrenome separados por um espaço.
  
  // Exemplo de retorno:
  // {
  //   nome: 'Nazaré',
  //   sobrenome: 'Tedesco',
  //   nomeCompleto: 'Nazaré Tedesco'
  // }
  
  let arr = []
  function recebeUmObjeto (){
    const arr =  pessoa = { nome: 'Nazaré', sobrenome: 'Tedesco'}
    return arr
  
  }
  
  console.log(recebeUmObjeto())
  
  novaArr = [{ nome: 'Nazaré', sobrenome: 'Tedesco' }]
  novaArr.push({nomeCompleto: 'Nazaré Tedesco'})
  console.log(novaArr)
  
  
  // 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
  // Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
  // EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)
  
  const numeros = [56, 12, 168, 66]
  
  function recebeArray(numeros){
  for (i = 1; i < numeros.length; i++){
      if (numeros[i] > numeros[i + 1]){ // mudando o sinal para < retorna o menor valor
      return numeros[i]
  }
  }
  }
  
  console.log (recebeArray(numeros))
  
  // 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, 
  // no seguinte formato: "o menor número é X e o maior número é Y".
  // Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5"
  
  const numInteiros = [5, 37, 18, 59, 12, -5]
  
  function recebeArrayNumerosInteiros (arr){
      let maior = 0
      let menor = 0
  
    for (i = 0 ; i < numInteiros.length; i++){
      if (arr[i] > maior){
        maior = arr[i]
      
      }
       if (arr[i] < menor){
         menor = arr[i]
  
       } 
    }
    return `o maior número é ${maior} e o menor número é ${menor}`
  }
  
   console.log(recebeArrayNumerosInteiros(numInteiros))
  

   
// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo 
//chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os 
// seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros 
// números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, 
// numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

///////////////////////

// escrita do número do cartão válido para teste  - 5555666677778884 - primeira linha
const cartao = [5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 4]
console.log(cartao) // Imprime array original
//retira último  dígito da array cartão
cartao.pop()


// variável cartaoReduzido vai receber o novo array sem o último dígito
cartaoReduzido = cartao
console.log (cartaoReduzido)

// método array.reverse : os elementos da variável cartaoReduzido é revertido e atribuído a variável cartaoInvertido
const cartaoInvertido = cartaoReduzido.reverse()

console.log('reverse', cartaoInvertido)

// verificar se o índice é ímpar

for(let i = 0; i < cartaoInvertido.length; i++) {
  const arrayAuxiliar = []
  if(i % 2 === 0) {
    // multiplicar por dois todos os indices do array pares 
    const valorMultiplicado = cartaoInvertido[i]*2

    if(valorMultiplicado > 9) {
      const valorSubtraido = valorMultiplicado - 9
      arrayAuxiliar.push(valorSubtraido);
        //return valorSubtraido;
    } else  {
      arrayAuxiliar.push(valorMultiplicado);
    }
    console.log('auxiliar', arrayAuxiliar);
  } else {
    arrayAuxiliar.push(cartaoInvertido[i]);
  }
  console.log('auxiliar',arrayAuxiliar)
  return arrayAuxiliar;
}

  

