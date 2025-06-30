const leia = require ("readline-sync");

let notaUm = 10.0;
let notaDois = 8.0;
let notaTres = 7.0;
let notaQuatro = 7.5;

leia.questionFloat;
console.log ("\n Nota 1:" + notaUm.toFixed(1));

leia.questionFloat;
console.log ("\n Nota 2:" + notaDois.toFixed(1));

leia.questionFloat;
console.log ("\n Nota 3:" + notaTres.toFixed(1));

leia.questionFloat;
console.log ("\n Nota 4:" + notaQuatro.toFixed(1));

let mediaFinal = (notaUm + notaDois + notaTres + notaQuatro)/4
console.log ("\n Media Final:" + mediaFinal.toFixed(1));