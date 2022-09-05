import { DataTypes, Model } from 'sequelize';
import db from './index';
import Payment from './Payments';
import User from './Users';

class UserPay extends Model {}

UserPay.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  payId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  tableName: 'pay-users',
});

UserPay.hasOne(User, { foreignKey: 'id' });
UserPay.hasOne(Payment, { foreignKey: 'id' });

User.hasMany(UserPay, { foreignKey: 'id' });
Payment.hasMany(UserPay, { foreignKey: 'id' });

export default UserPay;
