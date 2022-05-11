var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift()).toFixed(1);
var b = parseFloat(lines.shift()).toFixed(1);
var c = parseFloat(lines.shift()).toFixed(1);

if(a >= 0 && a <= 10 && b >= 0 && b <= 10 && c >= 0 && c <= 10){
    var media = (a*2 + b*3 + c*5)/10;
    console.log(`MEDIA = ${media.toFixed(1)}`);
}else{
    console.log(`ERRO`);
}