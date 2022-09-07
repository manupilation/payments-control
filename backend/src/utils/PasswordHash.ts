import { hash, compare } from 'bcryptjs';

export default class PasswordHash {
  static hashPassword = async (pass: string) => {
    const encryptPass = await hash(pass, 10);

    return encryptPass;
  };

}