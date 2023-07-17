import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Professor } from './Professor.js';

export const Curso = sequelize.define('curso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idioma: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  cargaHoraria:{
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  nivel:{
    type: DataTypes.STRING(10),
    allowNull: false
  },
  quantMatriculas:{
    type: DataTypes.INTEGER(3),
    allowNull: false,
    defaultValue : 0
  }
});

Curso.belongsTo(Professor, {
    foreignKey: {
      name: 'professor_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })

  Professor.hasMany(Curso,{foreignKey:"professor_id"})