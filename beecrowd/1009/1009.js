var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let func = lines.shift();
var sal = lines.shift();
var vend = lines.shift();

//var bonus =  sal + (vend * 0.15);

console.log(`${typeof func} ${typeof sal} ${typeof vend} `);

//console.log(`TOTAL = R$ ${bonus}`);
