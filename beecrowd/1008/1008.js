var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var func = parseInt(lines.shift());
var hor = parseInt(lines.shift());
var val = parseFloat(lines.shift()).toFixed(2);

var sal = hor*val;

console.log(`NUMBER = ${func}`);
console.log(`SALARY = U$ ${sal.toFixed(2)}`);

