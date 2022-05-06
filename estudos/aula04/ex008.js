function nacionalidade(){
    var c = document.querySelector(`input#txtp`).value; //para String utlizar .value
    var r = document.querySelector(`div#res`);
    
    r.innerHTML = `<p>Vivendo em <strong>${c}</strong></p>`;
    if(c == 'Brasil' || c == 'brasil'){
        r.innerHTML += `<p>Você é Brasileiro!</p>`;
    }else{
        r.innerHTML += `<p>Você é Extrangeiro!</p>`;
    }
}