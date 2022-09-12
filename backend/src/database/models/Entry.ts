import { DataTypes, Model } from 'sequelize';
import db from './index';

class Entry extends Model {
  declare id: number;
  declare date: string;
  declare value: number;
  declare procedure: number;
  declare patient: string;
}

Entry.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },

  procedure: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  patient: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  tableName: 'entries',
});

export default Entry;
