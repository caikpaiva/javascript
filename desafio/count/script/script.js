var num = Number(document.querySelector(`#txt`).value);
//var res = Number(num.value);
    
function reset(){
    //res = 0;
    //document.querySelector("#txt").value = res;
    
    num = 0;
    document.querySelector("#txt").value = num;
}

function inc(){
    //res += 1;
    //document.querySelector("#txt").value = res;
    
    num += 1;
    document.querySelector("#txt").value = num;
    
    //alert(`Acerto: ${res}`);
    //alert(res.innerHTML = `ERRO: ${num}`);
    //res.innerHTML = `Numero informado: ${num}`;
}

function dec(){
    //res -= 1;
    //document.querySelector("#txt").value = res;

    num -= 1;
    document.querySelector("#txt").value = num;
}