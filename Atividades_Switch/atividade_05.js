const leia = require('readline-sync')

console.log("******Menu Lanchonete Do Gordao********")


console.log('\n*************Produtos*************')
console.log('1 - Cachorro Quente');
console.log('2 - X-Salada');
console.log('3 - X-Bacon');
console.log('4 - Bauru');
console.log('5 - Refrigerante');
console.log('6 - Suco de Laranja');

let produto = leia.questionInt("\nDigite o Codigo do produto: ")

console.log('\n********Preço dos Produtos**********')
console.log('1 - R$ 10,00');
console.log('2 - R$ 15,00');
console.log('3 - R$ 18,00');
console.log('4 - R$ 12,00');
console.log('5 - R$ 8,00');
console.log('6 - R$ 13,00');

let quantidade = leia.questionInt("\n Quantas quantidades sera comprada: ")
let valor = quantidade;

2
switch(produto){
    case 1: 
        valor =  (quantidade * 10);
        produto = 'Cachorro Quente'
    break;
    case 2: 
        valor =  (quantidade * 15);
        produto = 'X-Salada'
    break;
    case 3: 
        valor =  (quantidade * 18);
        produto = 'X-Bacon'
    break
    case 4: 
        valor =  (quantidade * 12);
        produto = 'Bauru'
    break
    case 5: 
        valor =  (quantidade * 8);
        produto = 'Refrigerante'
    break
    case 6: 
        valor =  (quantidade * 13);
        produto = 'Suco de Laranja'
    break
    default:
        console.log("Codigo Invalido!");
        process.exit(0);


}

console.log(`O produto ${produto} ficou no valor Total de: R$ ${valor.toFixed(2)}`)