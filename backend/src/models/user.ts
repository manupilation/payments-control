import User from '../database/models/Users';
import IUser, { RegisterUser } from '../types/interfaces/User';
import PasswordHash from '../utils/PasswordHash';

export default class UserModel {
  getUser = async (username: string) => {
    const user = await User.findOne({
      where: {
        username
      }
    });

    return user;
  };
} 