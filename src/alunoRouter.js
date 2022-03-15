const express = require('express');

const fs = require('fs').promises;

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {//RECUPERAR ALL
    res.send('ok');
});


router.get('/:id', (req, res) => {//RECUPERA POR ID
    res.send(`get ${req.params.id}`);
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
    const matricula = req.params.numero;
    const data = await fs.readFile(global.fileName, 'utf-8');
    
    
});
router.post('/', async (req, res) => { //CRIAR NP
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

router.delete('/', (req, res) => {//excluir 
    res.send('delete');
});

module.exports = router;