const express = require('express');
const mustacheExpress = require('mustache-express')
const PORT = 8080;
const app = express();

// npm install mustache-express
// Exemplo : http://localhost:8080

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
app.get("/", (req, res)=>{

    let dados_erros = {
        erro_nome: req.query.erro_nome,
        erro_sobrenome: req.query.erro_sobrenome,
        erro_cpf: req.query.erro_cpf,
        erro_data_nascimento: req.query.erro_data_nascimento,
        erro_endereco: req.query.erro_endereco,
        erro_clinica: req.query.erro_clinica,
        erro_especialidade: req.query.erro_especialidade,
        erro_data: req.query.erro_data,
        erro_hora: req.query.erro_hora
    }
    
    let dados_form = {
        nome: req.query.nome,
        sobrenome: req.query.sobrenome,
        cpf: req.query.cpf,
        data_nascimento: req.query.data_nascimento,
        endereco: req.query.endereco,
        clinica: req.query.clinica,
        especialidade: req.query.especialidade,
        data: req.query.data,
        hora: req.query.hora,
        observacao: req.query.observacao
    }
    
    res.render("index.html", {dados_erros, dados_form});
});

app.post('/agendamento', (req, res)=>{
    dados_agendamento = req.body;
    console.log(dados_agendamento);

    let query_erros = ""
    let existe_erro = false;

    if(
        dados_agendamento.nome == null ||
        dados_agendamento.nome.length == 0 || 
        dados_agendamento.nome.trim() == ""
    ){
        query_erros += "erro_nome=true&";
        existe_erro = true;
    }
    else{
        query_erros += `nome=${dados_agendamento.nome}&`;
    }

    if(
        dados_agendamento.sobrenome == null ||
        dados_agendamento.sobrenome.length == 0 || 
        dados_agendamento.sobrenome.trim() == ""
    ){
        query_erros += "erro_sobrenome=true&";
        existe_erro = true;
    }
    else{
        query_erros += `sobrenome=${dados_agendamento.sobrenome}&`;
    }

    if(
        dados_agendamento.cpf == null ||
        dados_agendamento.cpf.length == 0 || 
        dados_agendamento.cpf.trim() == ""
    ){
        query_erros += "erro_cpf=true&";
        existe_erro = true;
    }
    else{
        query_erros += `cpf=${dados_agendamento.cpf}&`;
    }

    if(
        dados_agendamento.data_nascimento == null ||
        dados_agendamento.data_nascimento.length == 0 || 
        dados_agendamento.data_nascimento.trim() == ""
    ){
        query_erros += "erro_data_nascimento=true&";
        existe_erro = true;
    }
    else{
        query_erros += `data_nascimento=${dados_agendamento.data_nascimento}&`;
    }

    if(
        dados_agendamento.endereco == null ||
        dados_agendamento.endereco.length == 0 || 
        dados_agendamento.endereco.trim() == ""
    ){
        query_erros += "erro_endereco=true&";
        existe_erro = true;
    }
    else{
        query_erros += `endereco=${dados_agendamento.endereco}&`;
    }

    if(
        dados_agendamento.clinica == null ||
        dados_agendamento.clinica.length == 0 || 
        dados_agendamento.clinica.trim() == ""
    ){
        query_erros += "erro_clinica=true&";
        existe_erro = true;
    }
    else{
        query_erros += `clinica=${dados_agendamento.clinica}&`;
    }

    if(
        dados_agendamento.especialidade == null ||
        dados_agendamento.especialidade.length == 0 || 
        dados_agendamento.especialidade.trim() == ""
    ){
        query_erros += "erro_especialidade=true&";
        existe_erro = true;
    }
    else{
        query_erros += `especialidade=${dados_agendamento.especialidade}&`;
    }

    if(
        dados_agendamento.data == null ||
        dados_agendamento.data.length == 0 || 
        dados_agendamento.data.trim() == ""
    ){
        query_erros += "erro_data=true&";
        existe_erro = true;
    }
    else{
        query_erros += `data=${dados_agendamento.data}&`;
    }

    if(
        dados_agendamento.hora == null ||
        dados_agendamento.hora.length == 0 || 
        dados_agendamento.hora.trim() == ""
    ){
        query_erros += "erro_hora=true&";
        existe_erro = true;
    }
    else{
        query_erros += `hora=${dados_agendamento.hora}&`;
    }

    if(
        dados_agendamento.observacao != null && 
        dados_agendamento.observacao.trim() != ""
    ){
        query_erros += `observacao=${dados_agendamento.observacao}&`;
    }

    if(existe_erro){
        res.redirect('/?'+query_erros);
    }
    else{
        res.render('agendamento.html', {dados_agendamento});
    }
    
});

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
=======
app.get("/", (req, res) => {
    let dados_agendamento
    res.render("index.html");
});

app.post('/agendamento', (req, res) => {
    dados_agendamento = req.body;
    console.log(dados_agendamento);
});

if (
    dados_agendamento.nome == null ||
    dados_agendamento.nome.length == 0 ||
    dados_agendamento.nome.trim() == "" 
){
    res.redirect ('/?erro_nome=true');
}

else {
    res.render('agendamento.html', { dados_agendamento });
};

app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT);
});

>>>>>>> e60471cf35debed7d1e09081927b215065453cf4
