var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift()).toFixed(1);
var b = parseFloat(lines.shift()).toFixed(1);

if ( a >= 0 && a<=10 && b >= 0 && b <= 10){
    var media = (a*3.5 + b*7.5)/11;
    console.log(`MEDIA = ${media.toFixed(5)}`);
}else{
    console.log(`ERRO`);
}