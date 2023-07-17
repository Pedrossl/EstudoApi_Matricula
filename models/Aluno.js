import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Matricula } from './Matricula.js';

export const Aluno = sequelize.define('aluno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING(12),
//    allowNull: false
  }
});

Matricula.belongsTo(Aluno, {
  foreignKey: {
    name: 'aluno_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Aluno.hasMany(Matricula,{foreignKey:"aluno_id"})
