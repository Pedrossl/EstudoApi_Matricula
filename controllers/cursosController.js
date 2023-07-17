import { Curso } from "../models/Curso.js";
import { Professor } from "../models/Professor.js";

export const cursoIndex = async (req, res) => {
  try {
    const curso = await Curso.findAll({
      include: Professor
    });
    res.status(200).json(curso)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const cursoCreate = async (req, res) => {
  const { professor_id,idioma , cargaHoraria,nivel } = req.body

  // se não informou estes atributos
  if (!professor_id || !idioma || !cargaHoraria || !nivel) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const curso = await Curso.create({
        professor_id, idioma, cargaHoraria, nivel
    });
    res.status(201).json(curso)
  } catch (error) {
    res.status(400).send(error)
  }
}

