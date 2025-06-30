const leia = require ("readline-sync");

let salario = 10000.00;
let abono = 1000.00;
let novoSalario = salario + abono;

salario = leia.questionFloat("\n Digite o salario:");

abono = leia.questionFloat("\n Digite o abono:");

novoSalario = salario + abono;
console.log ("\n Novo Salario:" + novoSalario.toFixed(2));