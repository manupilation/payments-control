import { DataTypes, Model } from 'sequelize';
import db from './index';
import Entry from './Entry';

class Payment extends Model {
  declare id: number;
  declare patient: string;
  declare procedure: string;
  declare paid: boolean;
  declare date: string;
  declare totalValue: number;
  declare portionValue: number;
  declare qtPortion: number;
}

Payment.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },

  patient: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  procedure: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  paid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  totalValue: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },

  portionValue: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },

  qtPortion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  tableName: 'payments',
});

Payment.hasMany(Entry, { foreignKey: 'procedure', as: 'amount' });

export default Payment;
