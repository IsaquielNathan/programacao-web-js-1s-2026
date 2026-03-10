//Strings
let nome = "Isaquiel"
let sobrenome = "Nathan"
let templateString = `O meu nome e ${nome} ${sobrenome}`
console.log(templateString)

// Number
let a = 2
let b = 5.14
let c = -3.14
const PI = 3.14
let potencia = a **c

console.log(typeof a)
console.log(typeof c)
console.log(potencia)
// console.log(typeof )
// console.log(typeof )

//Bolean
let verdadeiro = true
let falso = false
console.log(typeof verdadeiro)

//Operadores Logicos
let e = verdadeiro && falso
let ou = verdadeiro || falso
console.log(e)
console.log(ou)

let maior_que = b > a; // Outros: >=, <, <=, ==, !=
console.log (`${b}>${a}=${maior_que}`);

//Arrays
let numeros = [1, 3.14, -7, 99, 505.67];
console.log (`numeros [0]=${numeros [0]}`); // Usando o índice para acessar
console.log (`numeros [3]=${numeros [3]}`); // Começa na posição 0
console.log (typeof numeros);

// Object
let pessoa = {
    nome: 'Isaquiel',
    cpf: 001,
    telefones:[1985656565665, 615558564455445]
};
console.log (pessoa);
console.log (`pessoa.nome=${pessoa.nome}`);