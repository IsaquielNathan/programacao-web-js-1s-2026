// Function - bloco de código que pode ser acionado
// DRY - Dont Repeat Yourself
function imprimirOlaMundo (){
    console.log ("Ola, mundo!");
}

imprimirOlaMundo();

// Estrutura de repetição
let i;
for (i=0; i<=10; i++){
    console.log (i);
}
console.log (i);
i = 0;
while(i<=5){
    console.log (i);
    i+++
}

// Estrutura condicional
let idade = 18
if (idade >= 18) {
    console.log (`${idade} anos é maior de idade.`);
}
else {
    console.log (`${idade} não é maior de idade.`);
}