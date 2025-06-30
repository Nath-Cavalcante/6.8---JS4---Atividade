const leia = require ("readline-sync");

let salarioBruto = 2000.00;
let adicionalNoturno = 500.00;
let horaExtra = 100.00;
let desconto = 200.00;

leia.questionFloat;
console.log ("\n Salario Bruto:" + salarioBruto.toFixed(2));

leia.questionFloat;
console.log ("\n Adicional Noturno:" + adicionalNoturno.toFixed(2));

leia.questionFloat;
console.log ("\n Hora Extra:" + horaExtra.toFixed(2));

leia.questionFloat;
console.log ("\n Desconto:" + desconto.toFixed(2));

let salarioLiquido = (salarioBruto + adicionalNoturno + (horaExtra * 5)-desconto)
console.log ("\n Salario Liquido:" + salarioLiquido.toFixed(2));
