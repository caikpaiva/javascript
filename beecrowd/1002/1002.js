var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift());
var p = 3.14159;

var area = p*(r**2);

console.log(`A=${area.toFixed(4)}`);