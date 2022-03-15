const express = require('express');

const fs = require('fs').promises;

const router = express.Router();
router.use(express.json());


router.get('/', (req, res) => {//RECUPERAR ALL
    res.send('ok');
});

router.get('/:id', (req, res) => {//RECUPERA POR ID
    res.send(`get ${req.params.mat}`);
});

router.get('/matricula/:numero', async (req, res) => { //retorna aluno por id
    const matricula = req.params.numero;
    const data = await fs.readFile(global.filename, 'utf-8');
    const json = Json.parse(data);

    const alunosList = json.alunos;
    const alunos = alunosList.filter( a => a.matricula == matricula);

        res.send(alunos);
});

router.get('/matricula/disc/:nome', async (req, res) => { // retonar media do aluno
    const data = await fs.readFile(global.fileName, 'utf-8');
    const json = JSON.parse(data);
    
    const alunosList = json.alunos;
    const alunos = alunosList.filter( a => a.matricula == req.params.matricula);

    if(aluno){
        let disciplinas = aluno.disciplinas;
        const disc = disciplinas.filter( d => d.nome == req.params.nome);
        if(disc) {
            let n1 = disc.n1;
            let n2 = disc.n2;

            let media = (n1+n2)/2;
            res.send(JSON.stringify(media))

        }
        else {
            res.status(404).end();
        }
    }
});

router.get('/matricula/result', async (req, res) => { // Resultado
    const data = await fs.readFile(global.fileName, 'utf8');
    const json = JSON.parse(data);

    const alunosList = json.alunos;
    const alunos = json.alunos.filter( a => a.matricula == req.params.matricula);

    if(aluno) {
        medias = []
        aluno.disciplinas.forEach(d => {
            medias.push((d.n1 + d.n2)/2)
        });
        res.send(medias)
    }
    else res.status(404).end();

    res.send(result);
   
});


router.post('/matricula', async (req, res) => { //CRIAR NP
    try {
        const content = await fs.readFile('./src/alunos.json', 'utf-8');
        const json = JSON.parse(content);
        const aluno = req.body;
        aluno.id = json.nextId;
        json.alunos.push(aluno);
        json.nextId++;
        await fs.writeFile('alunos.json', JSON.stringify(json));
        res.send(json);
    } catch (error) {
        res.send(error.message);
    }
});

router.put('/matricula', (req, res) => {//atualizar matricula
    res.send('put');
});

router.delete('/matricula', (req, res) => {//excluir 
    res.send('delete');
});

module.exports = router;