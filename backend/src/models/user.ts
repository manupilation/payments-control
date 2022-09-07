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

  loginRequest = async (data: IUser) => {
    const user = await this.getUser(data.username);

    if(!user) {
      this.handlerLoginError();
      return;
    }

    const passwordVerify = await PasswordHash.comparePassword(data.password, user.password);

    if (!passwordVerify) {
      this.handlerLoginError();
      return;
    }

    return user;
  };

  registerRequest = async (data: RegisterUser) => {
    const hashPass = await PasswordHash.hashPassword(data.password);

    const register = await User.create({
      username: data.username,
      email: data.email,
      password: hashPass,
    });

    return register;
  };

  handlerLoginError = () => {
    const err = new Error();
    err.name = 'invalid_user';
    err.message = 'Invalid user or password';
    throw err;
  };
} 