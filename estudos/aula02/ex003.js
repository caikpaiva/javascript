// converção de numeros
var n1 = Number.parseFloat(prompt("digite um numero: "));
var n2 = Number.parseFloat(prompt("digite outro numero: "));
//var n3 = Number(prompt("digite outro numero: "));  //pode usar apenas o Number também para conversão.

var soma = n1 + n2;

alert("Soma: " + soma);

/*
    Tipo String
    soma.toString();
    String(soma);
*/
nome = 'caik';
idade = 22;
nota = soma;

alert(`O aluno ${nome} com ${idade} anos tirou nota: ${nota}`); //template String usar ` `