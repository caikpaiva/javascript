function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

   
    msg.innerHTML = `Agora são <strong>${hora}:${min}:${seg}</strong>.`

    if(hora >= 0 && hora < 12){
        //Bom Dia
        img.src = 'imagens/fotodia.jpg';
        document.body.style.background = '#e2cd9f';
    }else if(hora >= 12 && hora <=18){
        //Boa Tarde
        img.src = 'imagens/fototarde.jpg';
        document.body.style.background = '#b9846f';
    }else{
        //Boa Noite
        img.src = 'imagens/fotonoite.jpg';
        document.body.style.background = '#515154';
    }
}