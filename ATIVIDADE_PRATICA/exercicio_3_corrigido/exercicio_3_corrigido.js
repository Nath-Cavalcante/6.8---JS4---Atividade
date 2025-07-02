const leia = require ("readline-sync");

let salarioBruto = leia.questionInt('Digite o Salario Bruto: ') ;
let adicionalNoturno = leia.questionInt('Digite o Adicional Noturno: ') ;
let horaExtra = leia.questionInt('Digite a Hora Extra: ') ;
let desconto = leia.questionInt('Digite o Desconto: ') ;

let salarioLiquido = (salarioBruto + adicionalNoturno + (horaExtra * 5)-desconto)
console.log ("\n Salario Liquido:" + salarioLiquido.toFixed(2));
