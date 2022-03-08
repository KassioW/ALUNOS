const express = require('express'); // commons
const cors = require('cors');
const routerAlunos = require('./alunosRouter')

const app = express();
app.use(express.json());
app.use(cors())

global.fileName  = 'alunos.json';

app.use('/alunos', routerAlunos);

app.listen(3000, () => {
    console.log('ok');
})