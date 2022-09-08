import { DataTypes, Model } from 'sequelize';
import db from './index';

class Entry extends Model {
  declare id: number;
  declare date: string;
  declare value: number;
  declare procedure: number;
}

export default Entry;
