function test(event){
    var entradaDeDados=document.getElementById('valor')
    if(event.keyCode===13){
        console.log(entradaDeDados.value)
    }
}