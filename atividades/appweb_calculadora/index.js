// npm init e npm install na criação de pacotes json
// npm install express@4.21.2

// Carrega framework express
const express = require('express');
const calculadora = require('./calculadora')

// Cria um app usando a função express()
const app = express();

// Define a porta da aplicação
const PORT = 8080;

// node . "arquivo que esta utlizando" para enviar a definição da PORT para a web

// Inicializar a aplicação na porta definida
app.listen(PORT, ()=>{
    console.log ('app rodando na porta' + PORT);
});

app.get('/',  (req, res)=>{
    res.send("Ola, mundo! Estou na web...");
});
// Exemplo : http://localhost:8080/

// URL fixa
app.get('/ola/joao', (req, res)=>{
    res.send('Ola, João');
});
// Exemplo: http://localhost:8080/ola/joao

// URL com parâmetro
 app.get('/ola/:nome', (req, res)=>{
    res.send(`Ola, ${req.params.nome}!`);
});
// Exemplo: http://localhost:8080/ola/Isaquiel 

// URL com múltiplos parâmetros
app.get ('/calculadora/somar/:a/:b',(req, res)=>{
    let a = Number (req.params.a);
    let b = Number (req.params.b);
    let resultado = calculadora.somar(a, b);
    let string_resultado =  `<h1>${a} + ${b} = ${resultado}</h1>`;
    res.send(string_resultado)
    LOG.push(string_resultado);
});
//Exemplo : http://localhost:8080/calculadora/somar/10/8

// Inicializar a aplicação na porta definida
