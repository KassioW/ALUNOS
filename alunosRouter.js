const fs = require('fs').promises;

const express = require('express');
const { ok } = require('assert');

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => { // retornar aluno por id
    res.send(`exec method: ${req.method}`);
});

router.get('/:id', (req, res) => { // retornar todos
    res.send(`exec method: ${req.method}`);
});

    router.get(
    )

router.post('/', async (req, res) => { // retornar todos
    let aluno = req.body;

    const data =  await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);    

    res.send(aluno);
    
    res.send(`exec method: ${req.method}`);
});

router.delete('/:id', (req, res) => { // retornar todos
    res.send(`exec method: ${req.method}`);
});

router.put('/:id', (req, res) => { // retornar todos
    res.send(`exec method: ${req.method}`);
});

module.exports = router;

