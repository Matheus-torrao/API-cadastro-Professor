const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", 'GET, POST,PUT,DELETE,OPTIONS')
    app.use(cors());
    next();
})
const bodyParserJson = bodyParser.json()

app.listen('3000', () =>{
    console.log('Server is running on port 3000')
});
var controllerProf = require('./controller/controllerProfessor.js');

app.post('/projeto-escolar/professor', cors(),bodyParserJson, async function (req, res) {
    let dados = req.body;
    let result = await controllerProf.inserirProfessor(dados);
    if (result)
        res.status(200).send(result);
    else
    res.status(400).send({ message: "Erro ao cadastrar professor" });
})

app.put('/projeto-escolar/professor/:id', cors(), bodyParserJson, async function(req, res){
    let idProfessor = req.params.id;
    let dados = req.body;
    let result = await controllerProf.atualizaProfessor(dados,idProfessor);
    if (result){
        res.status(200)
        res.json();
    }
    else{
        res.status(400)
        res.json({message :'Erro ao Atualizar Professor'})
    }

})
app.delete('/projeto-escolar/professor/:id', cors(),bodyParserJson, async function(req, res){
    let idProfessor = req.params.id;

    let result = await controllerProf.deletaProfessor(idProfessor);
    if (result){
        res.status(200)
        res.json()
    }
    else{
        res.status(400)
        res.json({message :'Erro ao Deletar Professor'})
    }

})

app.get('/projeto-escolar/professor',cors(), async function(req,res){
    let dadosProf = await controllerProf.selectALLprofessor();

    if (dadosProf){
        res.status(200);
        res.json(dadosProf)}
    else{
        res.status(400);
        res.json({message: "Erro ao buscar professor"})

    }
})

app.get('/projeto-escolar/professor/:id',cors(), async function(req, res){
    let idProfessor = req.params.id;
    let dadosProff =  await controllerProf.buscaProfessor(idProfessor);
    if (dadosProff){
        res.status(200);
        res.json(dadosProff);
        }
    else{
        res.status(400);
        res.json({message: "Erro ao buscar professor"})
    }
})

 

