// npm init e npm install na criação de pacotes json

// Carrega framework express
const express = require('express');

// Cria um app usando a função express()
const app = express();

// Define porta da aplicação
const PORT = 8080;

// node . "arquivo que esta utlizando" para enviar a definição da PORT para a web

app.get('/', function (req, res){
    res.send('<h1>Ola, mundo!</h1> <p>Estou na web...</p>');
});

app.listen(PORT, ()=>{
    console.log ('app rodando na porta' + PORT);
});
