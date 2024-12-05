// LEIA UM NUMERO INTEIRO E VERIFIQUE SE É PAR, IMPAR, NEGATIVO OU POSITIVO

const leia = require('readline-sync')

let numero = leia.questionInt("\nDigite um numero inteiro: "); 

if(numero >= 0 && numero % 2 == 0){
    console.log(`O Numero ${numero} é Par e Positivo `)
}
else if(numero < -1 && numero % 2 == 0 ){
    console.log(`O Numero ${numero} é Par e Negativo`)
}
else if(numero >= 0 && numero % 2 !== 0){
    console.log(`O numero ${numero} é Impar e Positivo`)
}
else {
    console.log(`O numero ${numero} é Impar e Negativo`)
}


