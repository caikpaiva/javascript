var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let func = String(lines.shift());
let sal = parseFloat(lines.shift()).toFixed(2);
let vend = parseFloat(lines.shift()).toFixed(2);

sal = Number(sal);
vend =  Number(vend);

const bonus =  sal + (vend * 0.15);

console.log(`TOTAL = R$ ${bonus.toFixed(2)}`);