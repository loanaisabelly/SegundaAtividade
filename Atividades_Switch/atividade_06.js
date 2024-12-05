const leia = require('readline-sync')


console.log("\nReajuste Salarial\n");

let nome = leia.question("\nDigite seu nome: ");
let salario = leia.questionFloat("\nDigite seu Salario: ")

console.log('\n*************Cargos*************')
console.log('1 - Gerente');
console.log('2 - Vendedor');
console.log('3 - Supervisor');
console.log('4 - Motorista');
console.log('5 - Estoquista');
console.log('6 - Tecnico de TI');

let cargo = leia.questionInt("\nDigite qual o seu cargo: ");
let novosalario = salario ;



switch(cargo){
    case 1: 
      novosalario = salario * 1.10;
      cargo = "Gerente"
      break;
    case 2:
      novosalario = salario * 1.07;
      cargo = "Vendedor"
      break;
    case 3:
     novosalario = salario * 1.09;
      cargo= "Supervisor"
     break;
     case 4:
     novosalario = salario * 1.06;
      cargo = "Motorista"
     break;
     case 5:
      novosalario = salario * 1.05;
      cargo = "Estoquista"
     break;
    case 6:
     novosalario = salario * 1.08;
     cargo = "TecnicoTI"
      break; 
    default:
        console.log("Cargo Invalido!!")
        process.exit(0);
}

console.log(`\nO colaborador ${nome} do Cargo ${cargo}, tem salario com reajuste no valor de  R$ ${novosalario.toFixed(2)}`)