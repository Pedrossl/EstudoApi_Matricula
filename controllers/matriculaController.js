import { sequelize } from "../databases/conecta.js";
import { Aluno } from "../models/Aluno.js";
import { Curso } from "../models/Curso.js";
import { Matricula } from "../models/Matricula.js";

export const matriculaIndex = async (req, res) => {
  try {
    const matricula = await Matricula.findAll({
      include: [Aluno,Curso]
    });
    res.status(200).json(matricula)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const matriculaCreate = async (req, res) => {
  const { aluno_id, curso_id } = req.body

  // se não informou estes atributos
  if (!aluno_id || !curso_id ) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  const trans = await sequelize.transaction();

  try {
    const matricula = await Matricula.create({
        aluno_id, curso_id 
    }, { transaction: trans });

    await Curso.increment('quantMatriculas',
      { by: 1, where: { id: curso_id }, transaction: trans }
    );

    await trans.commit();

    res.status(201).json(matricula)

  } catch (error) {

    await trans.rollback();
    res.status(400).json({"id": 0, "Erro": error})

  }
}

export const matriculaDelete = async (req, res) => {
    const { id } = req.params
  
    // se não informou estes atributos
    if (!id ) {
      res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
      return
    }
  
    const trans = await sequelize.transaction();
  
    try {
        const matricula = await Matricula.findByPk(id)

        const curso_id = matricula.dataValues.curso_id

        await Curso.decrement('quantMatriculas',
            { by: 1, where: { id: curso_id }, transaction: trans }
         );
        await Matricula.destroy({ where:{ id } },{ transaction: trans });
        
        await trans.commit();
  
        res.status(201).json(matricula)
  
    } catch (error) {
        console.log(error)
      await trans.rollback();
      res.status(400).json({"id": 0, "Erro": error})
  
    }
  }