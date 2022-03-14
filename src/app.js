const express = require('express');

const app = express();
app.use(express.json()); 

const alunoRouter = require('./alunoRouter');
app.use('/alunos', alunoRouter)

app.listen(3000, () => {
    console.log('servidor iniciado');    
});
