// LEIA 3 NUMEROS INTEIROS E VERIFIQUEI SE A SOMA DE A + B É MAIOR, MENOR OU IGUAL AO C

const leia = require('readline-sync')

console.log("\n Diferença dos numeros")

let a = leia.questionInt("\nDigite o valor de A: "); 
let b = leia.questionInt("\nDigite o valor de B: "); 
let c = leia.questionInt("\nDigite o valor de C: "); 
let soma = a + b


if(a + b > c){
    console.log(`${a} + ${b} = ${soma} > ${c}\nA soma de A + B foi maior que C `)
}
else if(a + b < c){
    console.log(`${a} + ${b} = ${soma} < ${c}\nA soma de A + B foi menor que C `)
}
else {
    console.log(`${a} + ${b} = ${soma}  = ${c}\nA soma de A + B foi igual que C `)
}

