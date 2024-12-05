// DOAÇÃO DE SANGUE 

const leia = require('readline-sync')

console.log("\n***********Portal de Doaçao de Sangue********")

let nome = leia.question("\nDigite seu nome: ")
let idade = leia.questionInt("\n Digite sua Idade: ")



if( idade <= 17 || idade >= 70){
    console.log(`${nome} não está apto para doar sangue!`);
}
else if( idade >= 18 && idade <=59){
    console.log(`${nome} está apto para doar sangue!`);
}
else if(idade >= 60 && idade <=69){
    primeiravez = leia.question("\n Primeira vez doando sangue? (sim ou nao)? ")

        if(primeiravez === 'sim'){
            console.log(`${nome} não está apto para doar sangue!`)
        }
        else if (primeiravez === 'nao'){
            console.log(`${nome} está apto para doar sangue!`);
        }
        else{
            console.log("Resposta inválida. Por favor, responda com 'sim' ou 'nao'.");
        }
}
else {
    console.log("Dados inválidos!");}