import express from 'express'
import cors from "cors"
import routes from './routes.js'

import { sequelize } from './databases/conecta.js'
import { Aluno } from './models/Aluno.js'
import { Curso } from './models/Curso.js'
import { Professor } from './models/Professor.js'
import { Matricula } from './models/Matricula.js'


const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');

    await Professor.sync({alter:true})
    await Curso.sync({alter:true})
    await Aluno.sync({alter:true})
    await Matricula.sync({alter:true})

  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
}
conecta_db()

app.get('/', (req, res) => {
  res.send('API Escola de Idiomas')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})