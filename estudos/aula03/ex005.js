var a = document.getElementById('teste');
//Eventos pelo javascript
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout',sair);

function clicar(){
    a.innerText = 'Clicou!';  //apenas texto inner HTML (Qualquer tag html)
    a.style.background = 'blue';
}
function entrar(){
    a.innerText = 'Entrou!';
}
function sair(){
    a.innerText = 'Saiu!';
    a.style.background = 'green';
}