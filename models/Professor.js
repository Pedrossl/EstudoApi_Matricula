import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Professor = sequelize.define('professor', {
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
  },
  salario: {
    type: DataTypes.FLOAT(9.2),
//    allowNull: false
  }
  
},
{tableName: 'professores'}
);

