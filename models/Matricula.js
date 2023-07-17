import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Curso } from './Curso.js';

export const Matricula = sequelize.define('matricula', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
});

Matricula.belongsTo(Curso, {
    foreignKey: {
      name: 'curso_id',
      allowNull: true
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

Curso.hasMany(Matricula,{foreignKey:"curso_id"})


  