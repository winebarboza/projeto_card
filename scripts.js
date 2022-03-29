function funcaoEnter(){
    if (event.keyCode == 13){
        var frase = window.document.getElementById("frase").value;
        window.document.getElementById("card").innerHTML = frase;
    }
    else{
        
    }
}


