import { Router } from "express"
import { cursoCreate, cursoIndex } from "./controllers/cursosController.js"
import { matriculaCreate, matriculaDelete, matriculaIndex } from "./controllers/matriculaController.js"


const router = Router()
router.get('/cursos', cursoIndex)
.post('/cursos',cursoCreate)

router.get('/matriculas', matriculaIndex)
.post('/matriculas',matriculaCreate)
.delete('/matriculas/:id',matriculaDelete)

export default router