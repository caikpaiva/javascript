var nome = prompt('Qual é seu nome?');
        
document.write(`Olá <strong>${nome}</strong>, Seu nome tem ${nome.length} letras.<br/>`);

document.write(`Seu nome em maiusculas  é ${nome.toLocaleUpperCase()} <br/>`);

document.write(`Seu nome em minusculas  é ${nome.toLocaleLowerCase()} <br/>`);


var n1 = 1535.5;

document.write(n1.toFixed(2) + '<br/>'); // 2 casas decimais
document.write(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  + '<br/>' ); // Transformar o valor e mosrtar no valor em formato de REAL