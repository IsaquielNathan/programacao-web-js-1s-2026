function verificarPariedade(numero){
if(numero < 0){console.log("Digite um numero valido")}
else if(numero % 2 == 0 ){ return true}
else{return false}
}

function apresentarMensagemPariedade(v){
    if(v == true){
        console.log(`${numero} e par`)
    }
    else{console.log(`${numero} e impar`)}
}
let numero = 6
let v = verificarPariedade(numero)
apresentarMensagemPariedade(v)