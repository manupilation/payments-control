import { DataTypes, Model } from 'sequelize';
import db from './index';
import Payment from './Payments';

class Entry extends Model {
  declare id: number;
  declare date: string;
  declare value: number;
  declare procedure: number;
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
    type: DataTypes.DECIMAL,
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

Entry.hasOne(Payment, { foreignKey: 'id' });

export default Entry;
