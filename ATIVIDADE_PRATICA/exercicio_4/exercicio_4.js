const leia = require ("readline-sync");

let numeroUm = 5.0;
let numeroDois = 6.0;
let numeroTres = 7.0;
let numeroQuatro = 8.0;

leia.questionFloat;
console.log ("\n Numero 1:" + numeroUm.toFixed(1));

leia.questionFloat;
console.log ("\n Numero 2:" + numeroDois.toFixed(1));

leia.questionFloat;
console.log ("\n Numero 3:" + numeroTres.toFixed(1));

leia.questionFloat;
console.log ("\n Numero 4:" + numeroQuatro.toFixed(1));

let diferenca = ((numeroUm * numeroDois) - (numeroTres * numeroQuatro));
console.log ("\n Diferença:" + diferenca.toFixed(2));