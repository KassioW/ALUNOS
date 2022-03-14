const express = require('express');

const fs = require('fs').promises;

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {//recuperar todos
    res.send('teste');
});


router.get('/:id', (req, res) => {//recuperar por id 
    res.send(`get ${req.params.id}`);
});

router.post('/', async (req, res) => { //criarnp
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

router.put('/', (req, res) => {//atualizar 
    res.send('put');
});

router.delete('/', (req, res) => {//excluir 
    res.send('delete');
});

module.exports = router;