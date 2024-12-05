const leia = require('readline-sync')

console.log("*****CALCULADORA*******")

let num1 = leia.questionFloat("\nDigite o primeiro numero: ")
let num2 = leia.questionFloat("\nDigite o segundo numero: ")

console.log("***Qual Operador Sera Usado****")
console.log("1 - Soma")
console.log("2 - Subtraçao")
console.log("3 - Multiplicaçao")
console.log("4 - Divisao")
console.log ("5 - Porcentagem")

let operador = leia.questionInt("\nEscolha o Operador: ")
let calculo 

switch(operador){
    case 1:
        calculo = num1 + num2;
        operador = 'Soma'
   break;
    case 2:
        calculo = num1 - num2;
        operador = 'Subtração'
    break;
    case 3: 
        calculo = num1 * num2;
        operador = 'Multiplicaçao'  
    break;
    case 4: 
        calculo = num1 / num2;
        operador = 'Divisao'
    case 5: 
    calculo = (num1 * num2) / 100;
    operador = 'Porcentagem'  

    if(operador = 'Porcentagem'){
        console.log(`\nA porcentagem foi: ${calculo} `)
    }
    else{ 
     console.log(`\nO Calculo dos numeros é ${calculo}`)
    }
    break
    default:
        console.log("\nOpção Invalida!!")


}

